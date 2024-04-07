<script>
    import {total} from '../stores/cart';
    import ProductList from "./ProductList.svelte";
    import {onMount} from "svelte";
    import { CreditCardOutline } from 'flowbite-svelte-icons';

    let selected = 0;

    onMount(() => {
        function footer() {
            const scrollPos = window.scrollY;
            const windowH = window.innerHeight;
            const docH = document.body.offsetHeight;
            const footer = document.querySelector('footer');

            if(scrollPos + windowH >= docH) {
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        }

        window.addEventListener('scroll', footer);
    });
</script>

<div class='flex xl:flex-row flex-col'>
    <main
        class='w-full xl:w-1/2 xl:h-screen bg-gradient-to-r from-transparent via-transparent to-gray-50'
    >
        <div class='mx-6 mt-14 xl:mt-40 xl:mx-36'>

            <div class='flex flex-col justify-center'>
                <div class='flex flex-row items-center'>
                    <img src="/leftarrow.png" alt="leftarrow" />
                    <img src='/avatar.png' alt='avatar' class='ml-2' />
                    <p class='ml-3 font-medium'>PowDur</p>
                </div>
                <div class='ml-7 mt-5'>
                    <p class='font-medium text-gray-500'>Pay Powdur</p>
                    <p class='text-4xl font-bold mt-2'>$ 167.00</p>
                    <div class='mt-8'>
                        <ProductList />
                    </div>
                </div>
            </div>
            <footer class='absolute xl:flex bottom-5 flex-row justify-center items-center hidden '>
                <p class='text-slate-500 font-medium'>Powered by <span class='font-bold text-slate-600'>stripe</span></p>
                <div class='mx-9 w-0.5 h-7 bg-black'></div>
                <a href='#' class='text-slate-500 font-medium'>Terms</a>
                <a href='#' class='text-slate-500 font-medium ml-5'>Privacy</a>
            </footer>
        </div>

    </main>
    <aside class='w-full xl:w-1/2 xl:h-full mb-14'
    >
        <div class='mx-20 mt-14 xl:mt-40 xl:mx-36'>
            <div class="flex flex-row justify-around">
                <div
                    class="w-32 h-24 bg-white rounded-lg border flex flex-col p-2 hover:transition-all hover:border-blue-400 hover:border-2 {selected === 0 ? 'border-blue-500' : 'border-gray-200'}"
                    on:click={() => selected = 0}
                >
                    <CreditCardOutline class="h-10 w-10 me-4 {selected === 0 ? 'text-blue-500' : 'text-gray-700'}" />
                    <p class="text font-medium {selected === 0 ? 'text-blue-500' : 'text-gray-700'}">Card</p>
                </div>
                <div
                    role="button"
                    class="w-32 h-24 bg-white rounded-lg border flex flex-col p-2 hover:transition-all hover:border-blue-400 hover:border-2 {selected === 1 ? 'border-blue-500' : 'border-gray-200'}"
                    on:click={() => selected = 1}
                >
                    <img src="/google-pay.svg" alt="google play" class="h-10 w-10 me-4" />
                    <p class="text font-medium {selected === 1 ? 'text-blue-500' : 'text-gray-700'}">Google Pay</p>
                </div>
                <div
                    role="button"
                    class="w-32 h-24 bg-white rounded-lg border flex flex-col p-2 hover:transition-all hover:border-blue-400 hover:border-2 {selected === 2 ? 'border-blue-500' : 'border-gray-200'}"
                    on:click={() => selected = 2}
                >
                    <img src="/google-pay.svg" alt="google play" class="h-10 w-10 me-4" />
                    <p class="text font-medium {selected === 2 ? 'text-blue-500' : 'text-gray-700'}">Klarna</p>
                </div>
                <div
                    role="button"
                    class="w-32 h-24 bg-white rounded-lg border flex flex-col p-2 hover:transition-all hover:border-blue-400 hover:border-2 {selected === 3 ? 'border-blue-500' : 'border-gray-200'}"
                    on:click={() => selected = 3}
                >
                    <img src="/google-pay.svg" alt="google play" class="h-10 w-10 me-4" />
                    <p class="text font-medium {selected === 3 ? 'text-blue-500' : 'text-gray-700'}">US Account Bank</p>
                </div>
            </div>
        </div>

    </aside>
</div>