var SerialPort = require("serialport");
const arduino = new SerialPort("COM3", {baudRate: 9600,});

function horario() {
    arduino.write('A');
}

function antihorario() {
    arduino.write('B');
}
setTimeout(horario, 1000);
setTimeout(antihorario, 5000);


