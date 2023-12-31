/** @param {NS} ns */
export async function main(ns) {
// Array of all servers that don't need any ports opened
// to gain root access. These have 16 GB of RAM
var servers0Port = ["sigma-cosmetics",
                    "joesguns",
                    "nectar-net",
                    "hong-fang-tea",
                    "harakiri-sushi"];

// Array of all servers that only need 1 port opened
// to gain root access. These have 32 GB of RAM
var servers1Port = ["neo-net",
                    "zer0",
                    "max-hardware",
                    "iron-gym"];

// Copy our scripts onto each server that requires 0 ports
// to gain root access. Then use nuke() to gain admin access and
// run the scripts.
for (var i = 0; i < servers0Port.length; ++i) {
    var serv = servers0Port[i];

    scp("early-hack-template.js", serv);
    nuke(serv);
    exec("early-hack-template.js", serv, 6);
}

// Wait until we acquire the "BruteSSH.exe" program
while (!fileExists("BruteSSH.exe")) {
    sleep(60000);
}

// Copy our scripts onto each server that requires 1 port
// to gain root access. Then use brutessh() and nuke()
// to gain admin access and run the scripts.
for (var i = 0; i < servers1Port.length; ++i) {
    var serv = servers1Port[i];

    scp("early-hack-template.js", serv);
    brutessh(serv);
    nuke(serv);
    exec("early-hack-template.js", serv, 12);
}
