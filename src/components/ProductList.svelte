<script>
    import Product from "./Product.svelte";

    let products = [{
        "product_name": "Pure set",
        "quantity": 1,
        "price": 65
    },
    {
        "product_name": "Pure glow cream",
        "quantity": 2,
        "price": 32
    }]

    let subTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    let salesTax = subTotal * 0.065;
    let totalDue = subTotal + salesTax;


</script>

<div class='flex flex-col gap-6'>
    {#each products as product}
        <Product product={product} />
    {/each}

    <div class='flex border-t-2 border-gray-200 pt-2 ml-16 flex-col gap-2'>
        <div class='flex flex-row justify-between w-full'>
            <p class='font-medium'>Subtotal</p>
            <p class='font-medium'>${subTotal}</p>
        </div>
        <p class='font-medium text-promotional-text'>Add promotional code</p>
        <div class='flex flex-row justify-between w-full'>
            <p class='font-medium'>Sales tax (6.5%)</p>
            <p class='font-medium'>${salesTax}</p>
        </div>
        <div class='flex flex-row justify-between w-full'>
            <div class='border-t-2 border-gray-200 w-full flex justify-between pt-2'>
                <p class='font-medium '>Total due</p>
                <p class='font-medium'>${totalDue}</p>
            </div>
        </div>
    </div>
</div>