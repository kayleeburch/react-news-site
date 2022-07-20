function NavBar({items}) {
  // {items} deconstructoring
  // const {items} = props

  const HandleNavBarClick = (value) => {
    console.log(value)
  }

  return (
    <nav>
      {items.map((item) => (
        //sending by reference: HandleNavBarClick
        //sending by reference with parameters: see below
        <a key={item.label} onClick={() => HandleNavBarClick(item.value)}> {item.label}</a>
        ))
      }
    </nav>
  )
}

export default NavBar;
