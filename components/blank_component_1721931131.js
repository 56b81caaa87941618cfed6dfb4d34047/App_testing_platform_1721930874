/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1721931131", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-gradient-to-r from-blue-900 to-purple-900 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="flex-1 max-w-md mx-auto bg-gradient-to-br from-blue-800 to-purple-800 rounded-xl shadow-lg shadow-purple-500/50 overflow-hidden md:max-w-2xl">
                        <div class="p-8">
                            <div class="flex justify-between items-center mb-6">
                                <h2 class="text-2xl font-bold text-white">Swap</h2>
                                <button @click="connectWallet" class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md">Connect Wallet</button>
                            </div>
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="fromToken">From</label>
                                <div class="flex items-center border-2 border-purple-400 rounded-lg p-2 bg-blue-900 bg-opacity-50">
                                    <input id="fromToken" type="number" v-model="fromAmount" class="w-full bg-transparent text-white focus:outline-none" placeholder="0.0">
                                    <select v-model="fromToken" class="ml-2 bg-purple-700 text-white rounded p-1">
                                        <option value="ETH">ETH</option>
                                        <option value="DAI">DAI</option>
                                        <option value="USDC">USDC</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-4 flex justify-center">
                                <button @click="swapTokens" class="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300 shadow-md">
                                    <i class='bx bx-transfer-alt text-2xl text-white'></i>
                                </button>
                            </div>
                            <div class="mb-6">
                                <label class="block text-white text-sm font-bold mb-2" for="toToken">To</label>
                                <div class="flex items-center border-2 border-purple-400 rounded-lg p-2 bg-blue-900 bg-opacity-50">
                                    <input id="toToken" type="number" v-model="toAmount" class="w-full bg-transparent text-white focus:outline-none" placeholder="0.0" readonly>
                                    <select v-model="toToken" class="ml-2 bg-purple-700 text-white rounded p-1">
                                        <option value="ETH">ETH</option>
                                        <option value="DAI">DAI</option>
                                        <option value="USDC">USDC</option>
                                    </select>
                                </div>
                            </div>
                            <button @click="swap" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md">Swap</button>
                        </div>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            fromAmount: '',
            toAmount: '',
            fromToken: 'ETH',
            toToken: 'DAI',
            walletConnected: false
        };
    },
    methods: {
        // Start of connectWallet method
        connectWallet() {
            // Simulating wallet connection
            this.walletConnected = true;
            alert('Wallet connected!');
        },
        // End of connectWallet method

        // Start of swapTokens method
        swapTokens() {
            const temp = this.fromToken;
            this.fromToken = this.toToken;
            this.toToken = temp;
        },
        // End of swapTokens method

        // Start of swap method
        swap() {
            if (!this.walletConnected) {
                alert('Please connect your wallet first!');
                return;
            }
            if (!this.fromAmount) {
                alert('Please enter an amount to swap!');
                return;
            }
            // Simulating swap
            this.toAmount = (parseFloat(this.fromAmount) * 0.98).toFixed(2); // 2% slippage
            alert(`Swapped ${this.fromAmount} ${this.fromToken} for ${this.toAmount} ${this.toToken}`);
        }
        // End of swap method
});
