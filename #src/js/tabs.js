//tabs
var tabs = document.querySelectorAll(".tabs");

var showTab = function showTab(self) {
    var pointer = self.value;
    var parentTabs = self.closest(".tabs");
    var tabsContent = parentTabs.querySelectorAll(".tabs__tab");
    tabsContent.forEach(function (tab) {
        tab.classList.remove("tabs__tab--active");
        if (tab.dataset.pointer === pointer) {
            tab.classList.add("tabs__tab--active");
        }
    });
};

if (tabs.length > 0) {
    tabs.forEach(function (tabsContainer) {
        var tabsControls = tabsContainer.querySelector(".tabs__controls");
        var labels = tabsControls.querySelectorAll('label')
        labels.forEach((label, ind, arr) => {
            label.addEventListener('click', (evt) => {
                arr.forEach(item => {
                    item.classList.remove('label--active')
                    if(evt.target === item) evt.target.classList.add('label--active')
                })
                
            })
        })
        tabsControls.addEventListener("change", function (evt) {
            showTab(evt.target);
        });
        showTab(tabsControls.querySelector("input:checked"));
        tabsContainer.dataset.loaded = "true";
    });
}