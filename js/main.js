
function Convert() {
    let egyptionBound = document.getElementById('egyptionBound').value;
    let total = document.getElementById('total');

    if (isNaN(egyptionBound)) {
        total.innerHTML = 'Write Number';
        return false;
    } else if (egyptionBound < 0) {
        total.innerHTML = 'Write a positive number';
        return false;
    } else if (egyptionBound == 0) {
        total.innerHTML = 'Type any number other than zero'
        return false;
    } else {
        total.innerHTML = egyptionBound * 50+'$';
        return false;
    }
}