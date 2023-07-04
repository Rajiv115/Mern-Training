// 4. Create a function Employee, having id, name, basic_Salary as arguments.
// Compute HRA, DA, TA, GS, NS.
// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.
// GS = Basic Salary + HRA + DA + TA;
// TAX DEDUCTION is 10% of GS.
// NS = GS - TAX DEDUCTION.
// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.


function Employee(id , name , basic_sal) {
    function HRA() {
        return basic_sal * 0.3;
    }
    function DA() {
        return basic_sal * 0.1;
    }
    function TA() {
        return basic_sal * 0.2;
    }
    function GS() {
        return basic_sal + HRA() + DA() + TA();
    }
    function NS() {
        return GS() - GS() * 0.1;
    }
    function printSalarySlip() {
        console.log(` HRA : Rs ${HRA()}
DA : Rs ${DA()}
TA : Rs ${TA()}
GS : Rs ${GS()}
NS : Rs ${NS()}`);
    }
    return printSalarySlip;
}

Employee("a","yugal",60000)();