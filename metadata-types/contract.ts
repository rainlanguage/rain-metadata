import { EVMAddress, Version } from "./general";

/**
 * @title Rain Contract Metadata
 * @description Schema for a contract
 * @version 0.01
 */
export type ContractMetadata = {
    addresses: EVMAddress[]
    name: string
    source: string
    commit: string
    description: string
    type: string
    expressions?: Expression[]
    contextColumns: ContextColumn[]
    inputs?: Input[]
    version: Version
}

/*
* Additional information about expressions (StateConfig) in this ABI.
*/
export type Expression = {
    name: string
    description: string
    path: string
    examples: string[]
    contextColumns?: ContextColumn[]
}

/*
 * Each column in the context, cells are optional in the case of additional context passed in at time of execution (like arbitrary signed context).
 */
export type ContextColumn = {
    name: string
    description?: string
    cells?: ContextCell[]
}

/*
 * One cell in the context.
 */
export type ContextCell = {
    name: string
    description?: string
}

/*
 * Additional information about inputs in this ABI.
 */
export type Input = {
    name: string
    description?: string
    path: string
}