window.onload = circles();
window.addEventListener('resize', function () { circles(); }, true);

function circles() {
    var circ = 3;
    var lines = 7;
    var spacing = getWidth() / circ;
    var container_bottom = document.getElementsByClassName('bottom-circles')[0];
    container_bottom.innerHTML = "";
    for (let i = 1; i <= lines; i++ , circ = circ * 2, spacing = spacing / 2) {
        var segment = document.createElement('div');
        segment.className = 'line';
        if (i != lines && i != lines-1)
            segment.style.margin = '5px 0 5px 0';
        container_bottom.appendChild(segment);
        for (let ii = 1; ii <= circ; ii++) {
            var span = document.createElement('div');
            span.className = 'circle';

            var t_spacing = (spacing - 15) / 2;
            span.style.marginLeft = t_spacing + 'px';
            span.style.marginRight = t_spacing + 'px';
            segment.appendChild(span);
        }
    }
    var container_top = document.getElementsByClassName('top-circles')[0];
    container_top.innerHTML = "";
    for (let i = 1; i <= lines+1; i++ , circ = circ / 2, spacing = spacing * 2) {
        if (i != 1) {
            var segment = document.createElement('div');
            segment.className = 'line';
            if (i != 2 && i != 3)
                segment.style.margin = '5px 0 5px 0';
            container_top.appendChild(segment);
            for (let ii = 1; ii <= circ; ii++) {
                var span = document.createElement('div');
                span.className = 'circle';

                var t_spacing = (spacing - 15) / 2;
                span.style.marginLeft = t_spacing + 'px';
                span.style.marginRight = t_spacing + 'px';
                segment.appendChild(span);
            }
        }
    }

    
};

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}