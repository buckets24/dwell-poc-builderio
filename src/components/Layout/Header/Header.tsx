const Header = ({ locations }: any) => {
  return (
    <header>
      <nav>
        {locations?.map((location: any) => (
          <ul key={location?.id}>
            <li>{location?.data?.city}</li>
            <ul className="pl-10">
              {location?.data?.properties?.map((property: { label: string; url: string }, index: number) => (
                <li key={index}>
                  <a href={property?.url}>{property?.label}</a>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </nav>
    </header>
  )
}

export default Header