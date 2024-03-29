<script>
    export let product_image = '';
    export let product;
</script>

<div class="flex flex-row w-4/4 justify-between">
    <div class='flex flex-row'>
        <div class='w-14'>
            <img src="/product.png" alt='product' />
        </div>
        <div class="flex flex-col ml-2">
            <p class='font-medium'>{product.product_name}</p>
            <div class='w-14 h-5 bg-slate-100 font-medium text-sm pl-1 rounded-md flex flex-row items-center'>
                Qty {product.quantity}
                <img src="/downarrow.png" alt='downarrow' />
            </div>
        </div>
    </div>
    <div class='flex flex-col items-end'>
        <p class='font-medium'>${(product.price * product.quantity).toFixed(2)}</p>
        {#if product.quantity > 1}
            <p class="ml-2 text-sm text-gray-500">${(product.price).toFixed(2)} each</p>
        {/if}

    </div>
</div>