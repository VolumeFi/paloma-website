/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_uniswapV4PoolManager",
                type: "address",
                internalType: "contract IPoolManager",
            },
            {
                name: "_uniswapV3Poolfactory",
                type: "address",
                internalType: "address",
            },
            {
                name: "_uniswapV2Poolfactory",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "_quoteExactInputSingleV4",
        inputs: [
            {
                name: "params",
                type: "tuple",
                internalType: "struct IMixedRouteQuoterV2.QuoteExactInputSingleV4Params",
                components: [
                    {
                        name: "poolKey",
                        type: "tuple",
                        internalType: "struct PoolKey",
                        components: [
                            {
                                name: "currency0",
                                type: "address",
                                internalType: "Currency",
                            },
                            {
                                name: "currency1",
                                type: "address",
                                internalType: "Currency",
                            },
                            {
                                name: "fee",
                                type: "uint24",
                                internalType: "uint24",
                            },
                            {
                                name: "tickSpacing",
                                type: "int24",
                                internalType: "int24",
                            },
                            {
                                name: "hooks",
                                type: "address",
                                internalType: "contract IHooks",
                            },
                        ],
                    },
                    {
                        name: "zeroForOne",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "exactAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                        internalType: "uint160",
                    },
                    {
                        name: "hookData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "poolManager",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IPoolManager",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "quoteExactInput",
        inputs: [
            {
                name: "path",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "param",
                type: "tuple",
                internalType: "struct IMixedRouteQuoterV2.ExtraQuoteExactInputParams",
                components: [
                    {
                        name: "nonEncodableData",
                        type: "tuple[]",
                        internalType: "struct IMixedRouteQuoterV2.NonEncodableData[]",
                        components: [
                            {
                                name: "hookData",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                ],
            },
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "gasEstimate",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteExactInputSingleV2",
        inputs: [
            {
                name: "params",
                type: "tuple",
                internalType: "struct IMixedRouteQuoterV2.QuoteExactInputSingleV2Params",
                components: [
                    {
                        name: "tokenIn",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenOut",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "amountIn",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "quoteExactInputSingleV3",
        inputs: [
            {
                name: "params",
                type: "tuple",
                internalType: "struct IMixedRouteQuoterV2.QuoteExactInputSingleV3Params",
                components: [
                    {
                        name: "tokenIn",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenOut",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "amountIn",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "fee",
                        type: "uint24",
                        internalType: "uint24",
                    },
                    {
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                        internalType: "uint160",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "gasEstimate",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteExactInputSingleV4",
        inputs: [
            {
                name: "params",
                type: "tuple",
                internalType: "struct IMixedRouteQuoterV2.QuoteExactInputSingleV4Params",
                components: [
                    {
                        name: "poolKey",
                        type: "tuple",
                        internalType: "struct PoolKey",
                        components: [
                            {
                                name: "currency0",
                                type: "address",
                                internalType: "Currency",
                            },
                            {
                                name: "currency1",
                                type: "address",
                                internalType: "Currency",
                            },
                            {
                                name: "fee",
                                type: "uint24",
                                internalType: "uint24",
                            },
                            {
                                name: "tickSpacing",
                                type: "int24",
                                internalType: "int24",
                            },
                            {
                                name: "hooks",
                                type: "address",
                                internalType: "contract IHooks",
                            },
                        ],
                    },
                    {
                        name: "zeroForOne",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "exactAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                        internalType: "uint160",
                    },
                    {
                        name: "hookData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "gasEstimate",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "uniswapV2Poolfactory",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "uniswapV3Poolfactory",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "uniswapV3SwapCallback",
        inputs: [
            {
                name: "amount0Delta",
                type: "int256",
                internalType: "int256",
            },
            {
                name: "amount1Delta",
                type: "int256",
                internalType: "int256",
            },
            {
                name: "path",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "unlockCallback",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "error",
        name: "InvalidPoolVersion",
        inputs: [
            {
                name: "poolVersion",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "LockFailure",
        inputs: [],
    },
    {
        type: "error",
        name: "NoLiquidityV3",
        inputs: [],
    },
    {
        type: "error",
        name: "NotEnoughLiquidity",
        inputs: [
            {
                name: "poolId",
                type: "bytes32",
                internalType: "PoolId",
            },
        ],
    },
    {
        type: "error",
        name: "NotPoolManager",
        inputs: [],
    },
    {
        type: "error",
        name: "NotSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "QuoteSwap",
        inputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "SliceOutOfBounds",
        inputs: [],
    },
    {
        type: "error",
        name: "UnexpectedRevertBytes",
        inputs: [
            {
                name: "revertData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
    },
];
export class MixedRouteQuoterV2__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
MixedRouteQuoterV2__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4ZWRSb3V0ZVF1b3RlclYyX19mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3R5cGVzL290aGVyL2ZhY3Rvcmllcy9NaXhlZFJvdXRlUXVvdGVyVjJfX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFHcEIsT0FBTyxFQUFFLFFBQVEsRUFBVSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFNakQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLElBQUksRUFBRSxTQUFTO2dCQUNmLFlBQVksRUFBRSx1QkFBdUI7YUFDdEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtZQUNEO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLElBQUksRUFBRSxTQUFTO2dCQUNmLFlBQVksRUFBRSxTQUFTO2FBQ3hCO1NBQ0Y7UUFDRCxlQUFlLEVBQUUsWUFBWTtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixZQUFZLEVBQ1YsMERBQTBEO2dCQUM1RCxVQUFVLEVBQUU7b0JBQ1Y7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLE9BQU87d0JBQ2IsWUFBWSxFQUFFLGdCQUFnQjt3QkFDOUIsVUFBVSxFQUFFOzRCQUNWO2dDQUNFLElBQUksRUFBRSxXQUFXO2dDQUNqQixJQUFJLEVBQUUsU0FBUztnQ0FDZixZQUFZLEVBQUUsVUFBVTs2QkFDekI7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLFdBQVc7Z0NBQ2pCLElBQUksRUFBRSxTQUFTO2dDQUNmLFlBQVksRUFBRSxVQUFVOzZCQUN6Qjs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsS0FBSztnQ0FDWCxJQUFJLEVBQUUsUUFBUTtnQ0FDZCxZQUFZLEVBQUUsUUFBUTs2QkFDdkI7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLGFBQWE7Z0NBQ25CLElBQUksRUFBRSxPQUFPO2dDQUNiLFlBQVksRUFBRSxPQUFPOzZCQUN0Qjs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsT0FBTztnQ0FDYixJQUFJLEVBQUUsU0FBUztnQ0FDZixZQUFZLEVBQUUsaUJBQWlCOzZCQUNoQzt5QkFDRjtxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLE1BQU07d0JBQ1osWUFBWSxFQUFFLE1BQU07cUJBQ3JCO29CQUNEO3dCQUNFLElBQUksRUFBRSxhQUFhO3dCQUNuQixJQUFJLEVBQUUsU0FBUzt3QkFDZixZQUFZLEVBQUUsU0FBUztxQkFDeEI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjt3QkFDekIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsT0FBTzt3QkFDYixZQUFZLEVBQUUsT0FBTztxQkFDdEI7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUFFLE9BQU87YUFDdEI7U0FDRjtRQUNELGVBQWUsRUFBRSxZQUFZO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2dCQUNmLFlBQVksRUFBRSx1QkFBdUI7YUFDdEM7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO0tBQ3hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxPQUFPO2dCQUNiLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUFFLHVEQUF1RDtnQkFDckUsVUFBVSxFQUFFO29CQUNWO3dCQUNFLElBQUksRUFBRSxrQkFBa0I7d0JBQ3hCLElBQUksRUFBRSxTQUFTO3dCQUNmLFlBQVksRUFBRSwrQ0FBK0M7d0JBQzdELFVBQVUsRUFBRTs0QkFDVjtnQ0FDRSxJQUFJLEVBQUUsVUFBVTtnQ0FDaEIsSUFBSSxFQUFFLE9BQU87Z0NBQ2IsWUFBWSxFQUFFLE9BQU87NkJBQ3RCO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsWUFBWSxFQUFFLFNBQVM7YUFDeEI7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUNWLDBEQUEwRDtnQkFDNUQsVUFBVSxFQUFFO29CQUNWO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLFlBQVksRUFBRSxTQUFTO3FCQUN4QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixZQUFZLEVBQUUsU0FBUztxQkFDeEI7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxTQUFTO2dCQUNmLFlBQVksRUFBRSxTQUFTO2FBQ3hCO1NBQ0Y7UUFDRCxlQUFlLEVBQUUsTUFBTTtLQUN4QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixZQUFZLEVBQ1YsMERBQTBEO2dCQUM1RCxVQUFVLEVBQUU7b0JBQ1Y7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixZQUFZLEVBQUUsU0FBUztxQkFDeEI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLElBQUksRUFBRSxTQUFTO3dCQUNmLFlBQVksRUFBRSxTQUFTO3FCQUN4QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsS0FBSzt3QkFDWCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxZQUFZLEVBQUUsUUFBUTtxQkFDdkI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjt3QkFDekIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3hCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUNWLDBEQUEwRDtnQkFDNUQsVUFBVSxFQUFFO29CQUNWO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxPQUFPO3dCQUNiLFlBQVksRUFBRSxnQkFBZ0I7d0JBQzlCLFVBQVUsRUFBRTs0QkFDVjtnQ0FDRSxJQUFJLEVBQUUsV0FBVztnQ0FDakIsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsWUFBWSxFQUFFLFVBQVU7NkJBQ3pCOzRCQUNEO2dDQUNFLElBQUksRUFBRSxXQUFXO2dDQUNqQixJQUFJLEVBQUUsU0FBUztnQ0FDZixZQUFZLEVBQUUsVUFBVTs2QkFDekI7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLEtBQUs7Z0NBQ1gsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsWUFBWSxFQUFFLFFBQVE7NkJBQ3ZCOzRCQUNEO2dDQUNFLElBQUksRUFBRSxhQUFhO2dDQUNuQixJQUFJLEVBQUUsT0FBTztnQ0FDYixZQUFZLEVBQUUsT0FBTzs2QkFDdEI7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLE9BQU87Z0NBQ2IsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsWUFBWSxFQUFFLGlCQUFpQjs2QkFDaEM7eUJBQ0Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLElBQUksRUFBRSxNQUFNO3dCQUNaLFlBQVksRUFBRSxNQUFNO3FCQUNyQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxtQkFBbUI7d0JBQ3pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFlBQVksRUFBRSxTQUFTO3FCQUN4QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLE9BQU87d0JBQ2IsWUFBWSxFQUFFLE9BQU87cUJBQ3RCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxRQUFRO2dCQUNkLFlBQVksRUFBRSxRQUFRO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxRQUFRO2dCQUNkLFlBQVksRUFBRSxRQUFRO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUFFLE9BQU87YUFDdEI7U0FDRjtRQUNELE9BQU8sRUFBRSxFQUFFO1FBQ1gsZUFBZSxFQUFFLE1BQU07S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUFFLE9BQU87YUFDdEI7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1NBQ0Y7UUFDRCxlQUFlLEVBQUUsWUFBWTtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsWUFBWSxFQUFFLFFBQVE7YUFDdkI7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsWUFBWSxFQUFFLFNBQVM7YUFDeEI7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsT0FBTztnQkFDYixZQUFZLEVBQUUsT0FBTzthQUN0QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxPQUFPLDJCQUEyQjtJQUV0QyxNQUFNLENBQUMsZUFBZTtRQUNwQixPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQWdDLENBQUM7SUFDbEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQXVCLENBQUM7SUFDN0UsQ0FBQzs7QUFUZSwrQkFBRyxHQUFHLElBQUksQ0FBQyJ9