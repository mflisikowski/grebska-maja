import { OfferData } from '@/types'

export async function fetchOfferData() {
  const data: OfferData[] = [
    {
      description:
        'Dzieci mogą doświadczać trudności emocjonalnych i behawioralnych, które wpływają na ich codzienne życie, naukę oraz relacje z rówieśnikami i rodziną. Oferuję terapię, która:',
      features: [
        'Pomaga w radzeniu sobie z lękiem i stresem.',
        'Wspiera rozwój umiejętności społecznych.',
        'Pomaga w zarządzaniu trudnymi emocjami.',
        'Wspiera dzieci z zaburzeniami nastroju, ADHD, zaburzeniami ze spektrum autyzmu, mutyzmem wybiórczym.',
      ],
      name: 'Terapia Dzieci',
      id: 'children-therapy',
    },
    {
      description:
        'Okres dojrzewania to czas intensywnych zmian i wyzwań. Psychoterapia poznawczo-behawioralna dla młodzieży jest dostosowana do ich unikalnych potrzeb i pomaga w:',
      features: [
        'Radzeniu sobie z presją szkolną i społeczną.',
        'Leczeniu depresji i zaburzeń lękowych.',
        'Rozwiązywaniu problemów z tożsamością i samooceną.',
        'Wspieraniu w trudnych sytuacjach rodzinnych i interpersonalnych.',
      ],
      name: 'Terapia Młodzieży',
      id: 'teenagers-therapy',
    },
    {
      description:
        'Osoby dorosłe często stają przed wieloma wyzwaniami życiowymi, które mogą wpływać na ich zdrowie i samopoczucie. Terapia może im pomóc w:',
      features: [
        'Radzeniu sobie z depresją, zaburzeniami lękowymi i przewlekłym stresem.',
        'Poprawie relacji interpersonalnych oraz umiejętności komunikacyjnych.',
        'Radzeniu sobie z problemami związanymi z pracą, wypaleniem zawodowym i trudnymi decyzjami życiowymi.',
        'Pracy nad rozwojem osobistym, zwiększaniem samoświadmości i budowaniem zdrowych nawyków myślowych.',
        'Poprawie samooceny.',
        'Radzeniu sobie z objawami ADHD, spektrum autyzmu.',
      ],
      name: 'Terapia Dorosłych',
      id: 'adult-therapy',
    },
  ]

  return data
}
