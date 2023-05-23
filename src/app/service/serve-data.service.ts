import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeDataService {

  constructor() { }

  planet_short_descript = [
    {
      id: 1,
      img: "../../assets/images/sun.png",
      title: "sun",
      description: "Hot, glowing ball of gas which is made up of Hydrogen and Helium, and approximately 93 million miles away from Earth."
    },
    {
      id: 2,
      img: "../../assets/images/mercury.png",
      title: "mercury",
      description: "A small, rocky planet which is closet to the sun but not the hottest in the solar system, and it has no atmosphere."
    },
    {
      id: 3,
      img: "../../assets/images/venus.png",
      title: "venus",
      description: "The hottest planet. The atmosphere is made up of carbon dioxide, and it has sulfuric acid clouds, mountains and volcanoes."
    },
    {
      id: 4,
      img: "../../assets/images/earth.png",
      title: "earth",
      description: "An ocean planet, made up of 70% water. The atmosphere is made of nitrogen and oxygen, which protects us from incoming meteoroids."
    },
    {
      id: 5,
      img: "../../assets/images/mars.png",
      title: "mars",
      description: "A cold, desert planet. It has seasons, weather, volcanoes and polar ice caps. Water mostly exists in icy dirt and thin clouds."
    },
    {
      id: 6,
      img: "../../assets/images/jupiter.png",
      title: "jupiter",
      description: "A gas giant which doesn't have a solid surface. The biggest planet in the solar system, and also has rings but very hard to see."
    },
    {
      id: 7,
      img: "../../assets/images/saturn.png",
      title: "saturn",
      description: "A ball of hydrogen and helium. Saturn has rings, made up of groups of tiny ringlets which are made of chunks of ice and rock. Has a thick atmosphere."
    },
    {
      id: 8,
      img: "../../assets/images/uranus.png",
      title: "uranus",
      description: "An ice giant mostly made of water, methane, and ammonia fluids above a small rocky center. It rotates in the opposite direction as most other planets and has 13 rings."
    },
    {
      id: 9,
      img: "../../assets/images/neptune.png",
      title: "neptune",
      description: "Also an ice giant. The atomosphere is thick and windy. Has 6 rings but very hard to see."
    }
  ]

  planet_details = [
    {
      id: 1,
      title: 'sun',
      img: 'https://spaceplace.nasa.gov/all-about-the-sun/en/solar-flare.en.jpg',
      type: 'yellow dwarf star',
      description: "The Sun holds the solar system together, keeping everything – from the biggest planets to the smallest debris – in its orbit. The Sun is a 4.5 billion-year-old yellow dwarf star made of hydrogen and helium, held together by its own gravity. Many solar systems have more than one star but the Sun is our solar system’s only star, everything in our solar system revolves around it. Nothing could live on the Sun, but its energy is vital for most life on Earth.",
      moons: "The Sun doesn’t have moons, but it’s orbited by eight planets, at least five dwarf planets, tens of thousands of asteroids, and perhaps three trillion comets and icy bodies.",
      rings: "The Sun would have been surrounded by a disk of gas and dust when the solar system was first forming, about 4.6 billion years ago. Some of that dust is still around today, in several dust rings that circle the Sun. ",
      time: "Measuring a “day” on the Sun is complicated because of the way it rotates. It doesn't spin as a single, solid ball. This is because the Sun’s surface isn't solid like Earth's. Instead, the Sun is made of super-hot, electrically charged gas called plasma. This plasma rotates at different speeds on different parts of the Sun. At its equator, the Sun completes one rotation in 25 Earth days. At its poles, the Sun rotates once on its axis every 36 Earth days.",
      atmosphere: "The part of the Sun we see from Earth – the part we call the surface – is the photosphere. The Sun doesn’t actually have a solid surface because it’s a ball of plasma.",
      neighbors: "Mercury is the closet planet to the sun.",
      namesake: "The Sun has been called by many names. The Latin word for Sun is  “sol”, which is the main adjective for all things Sun-related: solar."
    },
    {
      id: 2,
      title: 'mercury',
      img: 'https://spaceplace.nasa.gov/review/all-about-mercury/mercury3.en.jpg',
      type: 'terrestrial planet',
      description: "Mercury is a rocky planet, also known as a terrestrial planet and has a solid, cratered surface, much like the Earth's moon. Mercury is the smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system. Due to solar radiation, and extreme temperatures, life could not survive on Mercury.",
      moons: "Mercury has no moons.",
      rings: "There are no rings around Mercury.",
      time: "Mercury spins around slowly compared to Earth, so one day lasts 59 Earth days. Since Mercury is the fastest planet and has the shortest distance to travel around the Sun, it has the shortest year of all the planets in our solar system – 88 days. Because Mercury has a slow spin and short year, it takes a long time for the sun to rise and set there. Mercury only has one sunrise every 180 Earth days!",
      atmosphere: "Instead of an atmosphere, Mercury possesses a thin exosphere, composed mostly of oxygen, sodium, hydrogen, helium, and potassium.",
      neighbors: "Sun and Venus are Mercury's neighbors.",
      namesake: "Mercury is appropriately named for the swiftest of the ancient Roman gods."
    },
    {
      id: 3,
      title: 'venus',
      img: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzRFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5ad74d25da4b5682105b3196b61e2ae09eeecb65/Venus.jpg?disposition=attachment',
      type: 'terrestrial planet',
      description: "The hottest planet in our solar system and it rotates on its axis backward. Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains, with expansive volcanic plains and vast, ridged plateaus. Venus is often called \"Earth’s twin\" because they’re similar in size and structure, but Venus has extreme surface heat and a dense, toxic atmosphere. Venus is an unlikely place for life, but some scientists theorize microbes might exist high in the clouds.",
      moons: 'Venus has no moons.',
      rings: "There are no rings around Venus.",
      time: "Venus rotates very slowly on its axis – one day on Venus lasts 243 Earth days. But it orbits the Sun faster than Earth, so one year on Venus takes only about 225 Earth days, making a Venusian day longer than its year!",
      atmosphere: "Venus has a thick, toxic atmosphere filled with carbon dioxide and yellowish clouds of sulfuric acid that trap heat, and creating a runaway greenhouse effect – making it the hottest planet in our solar system with surface temperatures hot enough to melt lead.",
      neighbors: "Mercury and Earth are Venus' neighbors.",
      namesake: "Venus, the third brightest object after the Sun and Moon, was named after the Roman goddess of love and beauty. It’s the only planet named after a female god."
    },
    {
      id: 4,
      title: "earth",
      img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalFRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--876c727b183497f316736c122d0cbbddb9e2ac4f/earth_dscovr_apr19_med.jpg?disposition=attachment",
      type: "terrestrial planet",
      description: "Earth is a rocky planet with a solid and dynamic surface of mountains, canyons, plains and more.  Earth is the biggest of the four planets closest to the Sun, and it is the only world in our solar system with liquid water on the surface. Water covers 70% of Earth's surface, and it is the perfect place for life.",
      moons: "Earth is the only planet that has a single moon. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.",
      rings: "Earth has no rings.",
      time: "A day on Earth lasts a little under 24 hours. Earth makes a complete orbit around the sun in about 365.25 days, so one year on Earth lasts 365.25 days. That 0.25 extra means every four years we need to add one day to our calendar. We call it a leap day (in a leap year).",
      atmosphere: "Earth's atmosphere is 78 percent nitrogen, 21 percent oxygen and 1 percent other ingredients—the perfect balance to breathe and live. The atmosphere affects Earth's long-term climate and short-term local weather and shields us from much of the harmful radiation coming from the Sun. It also protects us from meteoroids, most of which burn up in the atmosphere.",
      neighbors: "Earth has one moon, and Venus and Mars are Earth’s neighbors. Earth also has lots of spacecraft watching it.",
      namesake: "The name Earth is at least 1,000 years old. The name Earth is a Germanic word, which simply means “the ground.”"
    },
    {
      id: 5,
      title: "mars",
      img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1FFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--88cbe3f9c7ee88b455b1a9c04f2ff5e556dbed9b/6453_mars-globe-valles-marineris-enhanced-full2.jpg?disposition=attachment",
      type: "terrestrial planet",
      description: "Mars is a dusty, cold, desert world with a very thin atmosphere. Like Earth, Mars has distinct seasons. The seasons vary in length because of Mars' elliptical, egg-shaped orbit around the Sun. Mars is known as the Red Planet due to oxidization – or rusting – of iron in the rocks, soil, and dust of Mars. At this time, Mars' surface cannot support life as we know it. Robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
      moons: "Mars has two moons named Phobos and Deimos. They're potato-shaped because they have too little mass for gravity to make them spherical.",
      rings: "Mars has no rings. However, in 50 million years when Phobos crashes into Mars or breaks apart, it could create a dusty ring around the Red Planet.",
      time: "One day on Mars takes a little over 24 hours. Mars makes a complete orbit around the Sun in 687 Earth days (a year in Martian time).",
      atmosphere: "Mars has a thin atmosphere made up mostly of carbon dioxide, argon, nitrogen, and a small amount of oxygen and water vapor. To our eyes, the sky would be hazy and red because of suspended dust. Since the atmosphere is so thin, it doesn’t offer much protection from meteorites and other objects, and heat from the Sun easily escapes this planet. If you were to stand on the surface of Mars on the equator at noon, it would feel like spring at your feet (24 degrees Celsius) and winter at your head (0 degrees Celsius).",
      neighbors: "The two moons, Earth and Jupiter are Mars neighbors.",
      namesake: "Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood."
    },
    {
      id: 6,
      title: "jupiter",
      img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaU1XIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c1e20058e1bfc3891a29e9d6230047c30ad3b697/PIA02821.jpg?disposition=attachment",
      type: "gas giant",
      description: "Jupiter is the largest planet in the solar system. Jupiter is a gas giant and lacks an Earth-like surface. If it has a solid inner core, it’s likely only about the size of Earth. Jupiter cannot support life as we know it. But some of Jupiter's moons have oceans beneath their crusts that might support life.",
      moons: "Jupiter is surrounded by dozens of moons. Jupiter has 80 moons, with four large moons and many smaller moons, Jupiter forms a kind of miniature solar system. One of the large moons, Europa is one of the likeliest places to find life elsewhere in our solar system. There is evidence of a vast ocean just beneath its icy crust, where life could possibly be supported.",
      rings: "Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice.",
      time: "Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours, and Jupiter makes a complete orbit around the Sun in about 12 Earth years (a year in Jovian time).",
      atmosphere: "Jupiter's atmosphere is made up mostly of hydrogen and helium. Jupiter has three distinct cloud layers in its “skies”. The top cloud is probably made of ammonia ice, middle layer is made of ammonium hydrosulfide crystals. The innermost layer may be made of water ice and vapor.",
      neighbors: "Its dozens of moons, Mars and Saturn are Jupiter's neighbors.",
      namesake: "Jupiter, being the biggest planet, gets its name from the king of the ancient Roman gods."
    },
    {
      id: 7,
      title: "saturn",
      img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFUyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f6c33ec10be27c355454f109b88bd36166225345/PIA12567-800w.jpg?disposition=attachment",
      type: "gas giant",
      description: "Saturn is a massive ball made mostly of hydrogen and helium, and it is the second-largest planet in our solar system. Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s. But it might have a solid core somewhere in there. Saturn cannot support life, but some of Saturn's moons have conditions that might support life.",
      moons: "Saturn is home to a vast array of intriguing and unique worlds. Saturn has 63 known moons with an additional 20 moons awaiting confirmation of their discovery—that is a total of 83 moons.",
      rings: "Saturn has the most spectacular ring system, with seven rings and several gaps and divisions between them. Saturn's rings are thought to be pieces of comets, asteroids, or shattered moons. They are made of billions of small chunks of ice and rock coated with other materials such as dust. The ring particles mostly range from tiny, dust-sized icy grains to chunks as big as a house. A few particles are as large as mountains.",
      time: "One day on Saturn takes only 10.7 hours, and Saturn makes a complete orbit around the Sun in about 29.4 Earth year (a year in Saturnian time).",
      atmosphere: "Saturn is blanketed with clouds that appear as faint stripes, jet streams, and storms. The planet is many different shades of yellow, brown, and gray.",
      neighbors: "Jupiter and Uranus are Saturn's neighbor planets.",
      namesake: "The planet is named for the Roman god of agriculture and wealth."
    },
    {
      id: 8,
      title: "uranus",
      img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--819271cfad7a01a6b9467d91dc5843695a73337c/PIA18182.jpg?disposition=attachment",
      type: "ice giant",
      description: "As an ice giant, Uranus doesn’t have a true surface. The planet is mostly swirling fluids. Most of its mass is a hot, dense fluid of “icy” materials – water, methane and ammonia – above a small rocky core. Uranus cannot support life as we know it. Like Venus, Uranus rotates east to west. ",
      moons: "Uranus has 27 known moons, and they are named after characters from the works of William Shakespeare and Alexander Pope. All of Uranus' inner moons appear to be roughly half water ice and half rock.",
      rings: "Uranus has 13 known rings. The inner rings are narrow and dark and the outer rings are brightly colored.",
      time: "Uranus takes about 17 hours to rotate once (a Uranian day), and about 84 Earth years to complete an orbit of the Sun (a Uranian year).",
      atmosphere: "Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color.",
      neighbors: "Its moons, Saturn and Neptune are Uranus's neighbors.",
      namesake: "The planet was named for Uranus, the Greek god of the sky,"
    },
    {
      id: 9,
      title: "neptune",
      img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmdEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a65d06ca25640bb1077a4903cdfe347786bcb147/PIA01492.jpg?disposition=attachment",
      type: "ice giant",
      description: "Neptune is dark, cold and whipped by supersonic winds. Neptune is an ice giant. Most of its mass is a hot, dense fluid of \"icy\" materials – water, methane and ammonia – above a small rocky core. Neptune is the only planet in our solar system not visible to the naked eye. Neptune cannot support life as we know it.",
      moons: "Neptune has 14 known moons which are named after sea gods and nymphs in Greek mythology.",
      rings: "Neptune has at least five main rings and four more ring arcs, which are clumps of dust and debris likely formed by the gravity of a nearby moon.",
      time: "Neptune takes about 16 hours to rotate once (a Neptunian day), and about 165 Earth years to orbit the sun (a Neptunian year).",
      atmosphere: "Neptune's atmosphere is made up mostly of hydrogen and helium with just a little bit of methane. Uranus is a blue-green color because of atmospheric methane, but Neptune is a more vivid, brighter blue.",
      neighbors: "Saturn and dwarf planet Pluto are Uranus's neighbors.",
      namesake: "The planet is named after the Roman god of the sea."
    }
  ]
}
