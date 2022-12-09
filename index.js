import Net from 'net';

// Timpul de expirare definit in milisecunde, pentru conexiunea noastra Socket
const timeout = 2000;

// Functia preia un ip si un sir de numere ce definesc o colectie de porturi
const PortScanner = (ip, startPort, endPort) => {

  // Iteram prin sirul de numere ce definesc colectia de porturi
  for (let port = startPort; port <= endPort; port++) {
    const socket = new Net.Socket();

    // Se incearca o conexiune socket catre IP + PORT-ul definit
    socket.connect({
      host: ip,
      port: port,
    }, () => {

      // Daca conexiunea a fost stabilita cu succes, logam rezultatul si trecem mai departe.
      console.log(`Port ${port} is open!`);
      socket.destroy();
    });

    socket.setTimeout(timeout, () => {

      // Daca timpul de expirare definit mai sus a fost atins, terminam conexiunea si trecem mai departe.
      socket.destroy();
    });
  };
};

export default PortScanner;