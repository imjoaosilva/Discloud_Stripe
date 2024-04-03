<script>
    import {total} from '../stores/cart';
    import ProductList from "./ProductList.svelte";
    import {onMount} from "svelte";

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
            <div class='w-full h-16 bg-black rounded-lg flex justify-center items-center'>
                <img src='/logo.png' alt='logo' class='w-16' />
            </div>

            <div class='bg-slate-100 h-0.5 w-full mt-8'></div>

            <form class='mt-8'>
                <div class='flex flex-col gap-6'>
                    <div>
                        <label for='email' class='text-slate-500 font-medium'>Email</label>
                        <input type='email' id='email' class='bg-white w-full h-12 border-2 border-slate-100 rounded-lg mt-2 px-4' />
                    </div>
                    <div>
                        <label for='cc' class='text-slate-500 font-medium'>Card Information</label>
                        <div class="flex row items-center relative">
                            <input type='number' placeholder='124 1234 1234 1234' id='cc' class='bg-white w-full h-12 border-2 border-slate-100 rounded-lg mt-2 px-4 placeholder:: text-lg font-medium' />
                            <img src='/payments.png' alt='payments' class='absolute right-4 top-6 hidden xl:block' />
                        </div>
                        <div class="flex row items-center">
                            <input type='number' placeholder='MM/YY' id='cc' class='bg-white w-1/2 h-12 border-2 border-slate-100 rounded-lg px-4 placeholder:: text-lg font-medium' />
                            <input type='number' placeholder='CVC' id='cc' class='bg-white w-1/2 h-9 border-2 border-slate-100 rounded-lg mt-1 px-4 placeholder:: text-lg font-medium' />
                        </div>
                    </div>
                    <div>
                        <label for='card' class='text-slate-500 font-medium'>Name on Card</label>
                        <input type='text' id='card' class='bg-white w-full h-12 border-2 border-slate-100 rounded-lg mt-2 px-4 placeholder:: text-lg font-medium' placeholder='Full name on card' />
                    </div>

                    <div>
                        <label for='country' class='text-slate-500 font-medium'>Country or region</label>
                        <select name="country" id="country" class='bg-white w-full h-10 border-2 border-b-0 border-slate-100 rounded-lg mt-2 px-4 placeholder:: text-lg font-medium'>
                            <option value="Nigeria">United States</option>
                            <option value="Ghana">Brazil</option>
                            <option value="Kenya">Portugal</option>
                        </select>
                        <input type='text' id='zip' class='bg-white w-full h-12 border-2 border-slate-100 rounded-lg px-4 placeholder:: text-lg font-medium' placeholder='ZIP' />
                    </div>

                    <button class='w-full h-12 bg-apple-pay-bg border border-black text-apple-pay-text font-medium rounded-lg text-lg'>Pay ${$total}</button>
                </div>
            </form>
        </div>

    </aside>
</div>