function carDetails(manufacturer: string, model: string, ...extras: { [key : string]: any } []):
object {
    const carDetail = {
        manufacturer,
        model,
         ...Object.assign({}, ...extras)
    }

    return carDetail;
};

let answer = carDetails(`toyota`, `Mehran`, {colour: `blue`}, {features: [`Navigations`, `Power window`]})

console.log(answer);