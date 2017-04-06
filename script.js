

    function toggleElem(elem) {
        var current = elem.nextElementSibling.classList.toggle('panel-body_hidden');

        console.log(current);

        var status = elem.getElementsByClassName('panel-status')[0];

        status.innerHTML = (!current) ? '[ Закрыть ]' : '[ Открыть ]';
    }

