import React from 'react'

class Animation extends React.Component {
    handleMouseMove = (e) => {
        const el = document.getElementById("wrapper");
        const d = el.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));
        // Invert values
        x = x - x * 2;
        y = y - y * 2;
        document.getElementById("anim").style.setProperty("--scale", 1.6);
        document.getElementById("anim").style.setProperty("--x", x / 2 + "px");

        document.getElementById("anim").style.setProperty("--y", y / 2 + "px");
    };

    handleMouseLeave = () => {
        document.getElementById("anim").style.setProperty("--scale", 1);
        document.getElementById("anim").style.setProperty("--x", 0);
        document.getElementById("anim").style.setProperty("--y", 0);
    };
    render() {
        return (
            <div id='anim'>
                <div
                    id="wrapper"
                    onMouseMove={this.handleMouseMove}
                    onClick={this.handleMouseLeave}
                >
                    <img id="image" />
                </div>
            </div>

        );
    }
}
export default Animation;


