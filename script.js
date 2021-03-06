var input = document.querySelector('input');

function numberWithCommas(num) {
    if  (num == '') return 0;
    return parseFloat(num).toLocaleString('en-US');
}

function getInputValue() {
    return input.value.replace(/,/g, "");
}

function setContent(selector, value, accuracy)
{
    accuracy = accuracy || 2;
    value = parseFloat(value).toFixed(accuracy);
    document.querySelector(selector).textContent = numberWithCommas(value);
}

input.addEventListener('input', function()
{
    var value = getInputValue();
    input.value = numberWithCommas(value);
    if (!isNaN(value))
    {
        setContent("#perYear", value*12);
        setContent("#perMonth", value*1);
        setContent("#perWeek", value/4);
        setContent("#perDay", value/30);
        setContent("#perHour", value/(30*12));
        setContent("#perWorkedHour", value/(30*7));
        setContent("#perMinute", value/(30*12*60), 4);
        setContent("#perSecond", value/(30*12*60*60), 4);
    }
});

var startTime = new Date();

function updateSinceArrived() {
    var value = getInputValue();
    var nowTime = new Date();
    var seconds = (nowTime - startTime) / 1000;
    var moneySinceArrived = seconds * value / (30*12*60*60);
    setContent("#sinceArrived", moneySinceArrived, 4);
}

setInterval(updateSinceArrived, 50);

if(window.innerHeight > window.innerWidth){
    alert("Please rotate your device in landscape!");
}
