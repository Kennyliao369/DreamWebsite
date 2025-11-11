const content = document.querySelector(".page-content");

function showPage(name) {
    content.innerHTML = pages[name];
    if (name === 'curriculum') initCurriculumControls();
    if (name === 'profile') initProfileControls();
}

document.querySelectorAll(".left-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
        showPage(btn.dataset.page);
    });
});

const pages = {
    about:           "<h1>About Me</h1><p>台北科技大学 资工系<br>喜欢做自己想做的事，讨厌内卷<br>是一个自由的人，不过现在正在归于平凡，由于课业与压力，不再有时间做自己想做的事</p>",
    background:      "<h1>Background and Skill</h1><p>电机系出身<br>写C,C++,MIPS,Python,Html,Css<br>管乐社教主<br>系学会灵魂人物</p>",
    project:         "<h1>Project</h1><p>Loading...</p>",

    curriculum:      '<h1>Curriculum</h1><div class="curriculum"><div class="controls"><span>Table width:</span><button data-width="500">500px</button><button data-width="800">800px</button><span style="margin-left:12px;">Border width:</span><button data-bw="1">1px</button><button data-bw="10">10px</button><button data-bw="20">20px</button><span style="margin-left:12px;">Cell spacing:</span><button data-spacing="1">1px</button><button data-spacing="10">10px</button><button data-spacing="20">20px</button><span style="margin-left:12px;">Table bg (tbody only):</span><input id="bgPicker" type="color" value="#fff6d5" /><span style="margin-left:12px;">Reset:</span><button id="reset" style="margin-left:auto;">Reset</button></div><table id="tbl" class="stylable" aria-label="Demo table"><thead><tr><th>H1</th><th>H2</th><th>H3</th></tr></thead><tbody><tr><td>A1</td><td>A2</td><td>A3</td></tr><tr><td>B1</td><td>B2</td><td>B3</td></tr><tr><td>C1</td><td>C2</td><td>C3</td></tr></tbody></table></div>',

    contact:         "<h1>Contact</h1><p>Mail: kennyliao369@gmail.com<br>Discord: kenny_c_s</p>",

    profile:         "<div class='profile'><div class='whole-img'><img class='cover-img' usemap='#image-map' src='./images/me-nbg.png'><span class='name-text'>KennyCS</span><img class='inside-img' src='./images/me-nbg-inside.png'></div><p>你好我是Kenny，学号是113590015</p></div>"
};

showPage("about");


function initCurriculumControls() {
    const root   = content.querySelector('.curriculum');
    if (!root) return;

    const table  = root.querySelector('#tbl');
    const tbody  = table.querySelector('tbody');
    const bgPicker = root.querySelector('#bgPicker');

    // 讀取初始值（做 Reset 用）
    const css = getComputedStyle(table);
    const defaults = {
        width: css.width,                     
        borderWidth: css.borderWidth,         
        borderSpacing: css.borderSpacing,
        tbodyBg: getComputedStyle(tbody).backgroundColor || 'transparent'
    };

    root.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        if (btn.dataset.width) {
            table.style.width = `${btn.dataset.width}px`;
            return;
        }

        if (btn.dataset.bw) {
            const px = `${btn.dataset.bw}px`;
            table.style.borderWidth = px;
            table.querySelectorAll('th, td').forEach(cell => {
                cell.style.borderWidth = px;
            });
            return;
        }

        if (btn.dataset.spacing) {
            table.style.borderCollapse = 'separate';
            table.style.borderSpacing  = `${btn.dataset.spacing}px`;
            return;
        }

        if (btn.id === 'reset') {
            table.style.width         = defaults.width;
            table.style.borderWidth   = defaults.borderWidth;
            table.style.borderSpacing = defaults.borderSpacing;
            table.style.borderCollapse = 'separate';

            table.querySelectorAll('th, td').forEach(cell => {
                cell.style.borderWidth = '';
            });

            tbody.style.backgroundColor = defaults.tbodyBg;

            try {
                const rgb = getComputedStyle(tbody).backgroundColor;
                bgPicker.value = rgbToHex(rgb) || '#fff6d5';
            } catch {
                bgPicker.value = '#fff6d5';
            }
            return;
        }
    });

    bgPicker.addEventListener('input', () => {
        tbody.style.backgroundColor = bgPicker.value;
    });

    function rgbToHex(rgb) {
        const m = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if (!m) return null;
        const r = (+m[1]).toString(16).padStart(2,'0');
        const g = (+m[2]).toString(16).padStart(2,'0');
        const b = (+m[3]).toString(16).padStart(2,'0');
        return `#${r}${g}${b}`;
    }
}


function initProfileControls() {
    const cover = document.querySelector(".cover-img");
    const nameText  = document.querySelector(".name-text");
    const areas = document.querySelectorAll('map[name="image-map"] area');

    areas.forEach(area => {
        area.addEventListener("mouseenter", () => {
            cover.style.opacity = "0";
            nameText.style.opacity = "1";
        });
        area.addEventListener("click", () => {
            cover.style.opacity = "1";
            nameText.style.opacity = "0";
        });
    });

    cover.addEventListener("mouseenter", () => {
        nameText.style.opacity = "1";
        cover.style.opacity = "0";
    });
    cover.addEventListener("mouseleave", () => {
        nameText.style.opacity = "0";
        cover.style.opacity = "1";
    });
}