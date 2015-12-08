(function() {
    this.Orientation = function(elem) {
        var settings = {
            classPrefix: '',
            verticalClass: 'landscape',
            horizontalClass: 'portrait',
            layoutType: 'client' // can be 'client' or 'offset'
        };

        function getOrientation(options) {
            // check for aditional user settings
            if (arguments[0] && typeof arguments[0] === 'object') {
                settings = extendSettings(settings, options);
            }

            elem.className = elem.className + ' ' + orientationCheck();
        }

        // add aditional user settings
        function extendSettings(settings, props) {
            for (prop in props) {
                if (props.hasOwnProperty(prop)) {
                    settings[prop] = props[prop];
                }
            }

            return settings;
        }

        // check the orientation
        function orientationCheck() {
            var elemWidth, elemHeight;

            switch (settings.layoutType) {
                case 'client':
                    elemWidth = elem.clientWidth;
                    elemHeight = elem.clientHeight;
                    break;
                case 'offset':
                    elemWidth = elem.offsetWidth;
                    elemHeight = elem.offsetHeight;
                    break;
            }

            if (elemWidth >= elemHeight) {
                return settings.classPrefix + settings.verticalClass;
            }

            return settings.classPrefix + settings.horizontalClass;
        }

        return {
            getOrientation: getOrientation
        };
    }
})();
