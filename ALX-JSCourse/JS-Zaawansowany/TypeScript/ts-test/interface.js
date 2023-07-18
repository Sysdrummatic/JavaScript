var Lukasz = {
    name: "Łukasz",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = Lukasz.name + "-" + Lukasz.id;
        if (!Lukasz.isManager) {
            return "emp" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(Lukasz.getUniqueId());
