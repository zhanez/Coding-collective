function Menu() {
    return(
        <aside class="menu">
        <ul class="menu-list">
            <li><a>Newsfeed</a></li>
            <li><a>My Profile</a></li>
            <li>
            <a class="is-active">Classmates</a>
            <ul>
                <li><a>Zhane Zabala</a></li>
                <li><a>Ellie Fu</a></li>
                <li><a>Marco Oseguera</a></li>
                <li><a>Yuwen Yu</a></li>
                <li><a>Chetan Sekhon</a></li>
            </ul>
            </li>
        </ul>
        </aside>
);
}

export default Menu;