function Car(speedMax = 200, delta = 5) {
    let atualSpeed = 0;

    this.acelerate = function () {
        if (atualSpeed + delta <= speedMax) {
            atualSpeed += delta; // Aumenta a velocidade
        } else {
            atualSpeed = speedMax; // Limita a velocidade no máximo
        }
        console.log(`Velocidade atual: ${atualSpeed} km/h`);
    };
}
