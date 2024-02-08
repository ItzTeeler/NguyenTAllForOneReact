const AddNumApi = async (num1, num2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Add2Numbers/Adding2Num/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

const AskingQuestionsApi = async (nameInput, timeInput) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Ask2Questions/Ask2Questions/${nameInput}/${timeInput}`);
    const data = await promise.text();
    return data;
}

const GreaterThanLessThanApi = async (num1, num2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

const MabLibApi = async (genderInput, nameInput, ageInput, colorInput, pronounInput, foodInput, jobInput, adjective1Input, adjective2Input, nounInput) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/MadLib/MadLib/${genderInput}/${nameInput}/${ageInput}/${colorInput}/${pronounInput}/${foodInput}/${jobInput}/${adjective1Input}/${adjective2Input}/${nounInput}`);
    const data = await promise.text();
    return data;
}

const Magic8BallApi = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();
    return data;
}

const OddOrEvenApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/OddOrEven/OddOrEven/${numberInput}`);
    const data = await promise.text();
    return data;
}

const RestaurantPickerApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${numberInput}`);
    const data = await promise.text();
    return data;
}

const ReverseItNumbersApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItNumbersOnly/ReverseItNumbersOnly/${numberInput}`);
    const data = await promise.text();
    return data;
}

const ReverseItStringApi = async stringInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${stringInput}`);
    const data = await promise.text();
    return data;
}

const SayHello = async nameInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/controller/SayHell/${nameInput}`);
    const data = await promise.text();
    return data;
}

export {AddNumApi, AskingQuestionsApi, GreaterThanLessThanApi, MabLibApi, Magic8BallApi, OddOrEvenApi, RestaurantPickerApi, ReverseItNumbersApi, ReverseItStringApi, SayHello}