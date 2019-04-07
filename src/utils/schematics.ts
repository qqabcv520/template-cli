#!/usr/bin/env node
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// symbol polyfill must go first
// tslint:disable-next-line
import 'symbol-observable';
// tslint:disable-next-line:ordered-imports import-groups
import { normalize, schema, tags, terminal, virtualFs } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { DryRunEvent } from '@angular-devkit/schematics';
import { NodeWorkflow } from '@angular-devkit/schematics/tools';
import * as inquirer from 'inquirer';


function _createPromptProvider(): schema.PromptProvider {
    return (definitions: Array<schema.PromptDefinition>) => {
        const questions: inquirer.Questions = definitions.map(definition => {
            const question: inquirer.Question = {
                name: definition.id,
                message: definition.message,
                default: definition.default,
            };

            const validator = definition.validator;
            if (validator) {
                question.validate = input => validator(input);
            }

            switch (definition.type) {
                case 'confirmation':
                    return {...question, type: 'confirm'};
                case 'list':
                    return {
                        ...question,
                        type: !!definition.multiselect ? 'checkbox' : 'list',
                        choices: definition.items && definition.items.map(item => {
                            if (typeof item == 'string') {
                                return item;
                            } else {
                                return {
                                    name: item.label,
                                    value: item.value,
                                };
                            }
                        }),
                    };
                default:
                    return {...question, type: definition.type};
            }
        });

        return inquirer.prompt(questions);
    };
}

export async function runSchematic(collectionName = '', schematicName = '', options: any = {}): Promise<void> {

    /** Create a Virtual FS Host scoped to where the process is being run. */
    const fsHost = new virtualFs.ScopedHost(new NodeJsSyncHost(), normalize(process.cwd()));

    /** Create the workflow that will be executed with this run. */
    const workflow = new NodeWorkflow(fsHost, {});

    workflow.reporter.subscribe((event: DryRunEvent) => {
        console.log(event);
    });
    workflow.lifeCycle.subscribe(event => {
        console.log(event);
    });

    // Add prompts.
    workflow.registry.usePromptProvider(_createPromptProvider());

    return await workflow.execute({
        collection: collectionName,
        schematic: schematicName,
        options,
    }).toPromise();
}
