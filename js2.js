function calculateArea() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    if( width && height){
        var area = width * height;

        document.getElementById('result').innerText = 'Area of a rectangle' + area;
    } else{
        document.getElementById('result').innerText = 'please enter both width and height.';
    }

}