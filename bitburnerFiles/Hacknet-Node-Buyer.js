/** @param {NS} ns */
export async function main(ns) {
	function myMoney() {
		return getServerMoneyAvailable("home");
	}
	var cnt = 8;
	var hacknet = "hacknet-node-*";
	
	while (numNodes() < cnt) {
		res = purchaseNode();
		print("Purchased hacknet Node with index " + res);
	};

	for (var i = 0; i < cnt; i++) {
		while (getNodeStats(i).level <= 80) {
			var cost = getLevelUpgradeCost(i, 10);
			while (myMoney() < cost) {
				print("Need $" + cost + " . Have $" + myMoney());
				sleep(3000);
			}
			res = hacknet.upgradeLevel(i, 10);
		};
	};

	print("All nodes upgraded to level 80");

	for (var i = 0; i < cnt; i++) {
		while (getNodeStats(i).ram < 16) {
			var cost = getRamUpgradeCost(i, 2);
			while (myMoney() < cost) {
				print("Need $" + cost + " . Have $" + myMoney());
				sleep(3000);
			}
			res = upgradeRam(i, 2);
		};
	};

	print("All nodes upgraded to 16GB RAM");

	for (var i = 0; i < cnt; i++) {
		while (getNodeStats(i).cores < 8) {
			var cost = getCoreUpgradeCost(i, 1);
			while (myMoney() < cost) {
				print("Need $" + cost + " . Have $" + myMoney());
				sleep(3000);
			}
			res = upgradeCore(i, 1);
		};
	};
	print("All nodes upgraded to 8 cores");
}