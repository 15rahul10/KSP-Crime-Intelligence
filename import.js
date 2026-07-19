const { execSync } = require("child_process");

const tables = [
  "State",
  "ReligionMaster",
  "OccupationMaster",
  "Designation",
  "Rank",
  "UnitType",
  "GravityOffence",
  "CaseStatusMaster",
  "CaseCategory",
  "Act",
  "Section",
  "CrimeHead",
  "CrimeSubHead",
  "Court",
  "District",
  "Unit",
  "Employee",
  "CaseMaster",
  "ComplainantDetails",
  "Victim",
  "Accused",
  "ArrestSurrender",
  "ChargesheetDetails",
  "ActSectionAssociation",
  "CrimeHeadActSection",
  "Inv_OccuranceTime",
  "inv_arrestsurrenderaccused"
];

for (const table of tables) {
    console.log(`\n====================================`);
    console.log(`Importing ${table}.csv`);
    console.log(`====================================`);

    try {
        execSync(
            `catalyst ds:import "..\\${table}.csv" --table ${table}`,
            { stdio: "inherit" }
        );
    } catch (err) {
        console.log(`❌ ${table} import failed`);
    }
}

console.log("\n✅ Import process completed.");