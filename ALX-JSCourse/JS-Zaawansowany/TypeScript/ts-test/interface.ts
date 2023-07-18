interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const lukasz: Employee = {
    name: "Łukasz",
    id: 1,
    isManager: true,
    getUniqueId: () => {
        let uniqueId = lukasz.name + "-" + lukasz.id;
        if (!Lukasz.isManager) {
            return "emp" + uniqueId;
        }

        return uniqueId;
    },
};

console.log(lukasz.getUniqueId());
