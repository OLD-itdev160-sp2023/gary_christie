(function() {

    var data = [
    {
        name: 'emmet',           
        description: 'Emmet is the number one code snippet tool.',   
        author: 'emmetio',        
        url: 'https://github.blog/2022-06-08-sunsetting-atom/',
        downloads: 1662209,
        stars: 2534,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',           
        description: 'The atom-beautify package will clean up your code',    
        author: 'glavin001',         
        url: 'https://github.blog/2022-06-08-sunsetting-atom/',
        downloads: 4228040,
        stars: 4501,
        price: 6.57,
        selector:'p2'
    }    
    ]; 

    function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.downloads.toLocaleString();
    };
    }

    var getTodayDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodayDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
}());