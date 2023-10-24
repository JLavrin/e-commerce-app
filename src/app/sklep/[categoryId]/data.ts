export enum Category {
  Bike = 'rowery'
}

const data: {
  [key in Category]: {
    id: number
    name: string
    slug: string
    imageSrc: string
    description: string
    details: {
      general: {
        brand: string
        gender: string
        color: string
        weight: string
      }
      frame: {
        size: string
        material: string
        fork: string
        rearShock: string
      }
      drive: {
        shifters: string
        frontDerailleur: string
        rearDerailleur: string
        cassette: string
        chain: string
      }
      brakes: {
        brakes: string
        brakeLevers: string
      }
      wheels: {
        size: string
        hubs: string
        rims: string
        spokes: string
        tires: string
      }
      components: {
        saddle: string
        seatpost: string
        handlebar: string
        stem: string
        headset: string
        grips: string
        pedals: string
      }
    }
  }[]
} = {
  [Category.Bike]: [
    {
      id: 1,
      name: 'Cannondale',
      slug: 'cannondale',
      imageSrc: '/images/bike/cannondale.png',
      description: 'Amerykańskie rowery szosowe',
      details: {
        general: {
          brand: 'Cannondale',
          gender: 'Unisex',
          color: 'Various',
          weight: '10 kg',
        },
        frame: {
          size: '54 cm',
          material: 'Aluminum',
          fork: 'Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano 105',
          frontDerailleur: 'Shimano 105',
          rearDerailleur: 'Shimano 105',
          cassette: 'Shimano 105 11-30T',
          chain: 'KMC X11',
        },
        brakes: {
          brakes: 'Shimano 105',
          brakeLevers: 'Shimano 105',
        },
        wheels: {
          size: '700c',
          hubs: 'Formula',
          rims: 'Maddux RD 3.0',
          spokes: 'Stainless Steel',
          tires: 'Vittoria Zaffiro 700x25c',
        },
        components: {
          saddle: 'Prologo Kappa RS',
          seatpost: 'Cannondale C3',
          handlebar: 'Cannondale C3',
          stem: 'Cannondale C3',
          headset: 'Cannondale C3',
          grips: 'Cannondale Bar Tape',
          pedals: 'Wellgo Clipless',
        },
      },
    },
    {
      id: 2,
      name: 'Specialized',
      slug: 'specialized',
      imageSrc: '/images/bike/specialized.png',
      description: 'Amerykańskie rowery szosowe',
      details: {
        general: {
          brand: 'Specialized',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.5 kg',
        },
        frame: {
          size: '56 cm',
          material: 'Carbon',
          fork: 'Specialized FACT Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Ultegra',
          frontDerailleur: 'Shimano Ultegra',
          rearDerailleur: 'Shimano Ultegra',
          cassette: 'Shimano Ultegra 11-30T',
          chain: 'Shimano Ultegra',
        },
        brakes: {
          brakes: 'Shimano Ultegra',
          brakeLevers: 'Shimano Ultegra',
        },
        wheels: {
          size: '700c',
          hubs: 'Roval C38 Disc',
          rims: 'Roval C38 Disc',
          spokes: 'DT Swiss Aerolite',
          tires: 'Turbo Pro 700x26c',
        },
        components: {
          saddle: 'Specialized Power',
          seatpost: 'Specialized S-Works FACT Carbon',
          handlebar: 'Specialized S-Works Aerofly II',
          stem: 'Specialized S-Works Future Stem',
          headset: 'CeramicSpeed',
          grips: 'Specialized S-Wrap',
          pedals: 'Shimano Dura-Ace',
        },
      },
    },
    {
      id: 3,
      name: 'Trek',
      slug: 'trek',
      imageSrc: '/images/bike/trek.png',
      description: 'Amerykańskie rowery szosowe',
      details: {
        general: {
          brand: 'Trek',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.8 kg',
        },
        frame: {
          size: '55 cm',
          material: 'Carbon',
          fork: 'Trek OCLV Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano 105',
          frontDerailleur: 'Shimano 105',
          rearDerailleur: 'Shimano 105',
          cassette: 'Shimano 105 11-32T',
          chain: 'Shimano 105',
        },
        brakes: {
          brakes: 'Shimano 105',
          brakeLevers: 'Shimano 105',
        },
        wheels: {
          size: '700c',
          hubs: 'Bontrager',
          rims: 'Bontrager TLR',
          spokes: 'Stainless Steel',
          tires: 'Bontrager R1 700x28c',
        },
        components: {
          saddle: 'Bontrager Montrose Comp',
          seatpost: 'Bontrager Carbon',
          handlebar: 'Bontrager Comp VR-C',
          stem: 'Bontrager Elite Blendr',
          headset: 'Integrated',
          grips: 'Bontrager Supertack',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 4,
      name: 'Scott',
      slug: 'scott',
      imageSrc: '/images/bike/scott.png',
      description: 'Szwajcarskie rowery szosowe',
      details: {
        general: {
          brand: 'Scott',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.2 kg',
        },
        frame: {
          size: '53 cm',
          material: 'Carbon',
          fork: 'Scott Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Ultegra',
          frontDerailleur: 'Shimano Ultegra',
          rearDerailleur: 'Shimano Ultegra',
          cassette: 'Shimano Ultegra 11-30T',
          chain: 'Shimano Ultegra',
        },
        brakes: {
          brakes: 'Shimano Ultegra',
          brakeLevers: 'Shimano Ultegra',
        },
        wheels: {
          size: '700c',
          hubs: 'Syncros RP2.0',
          rims: 'Syncros RP2.0',
          spokes: 'Syncros RP2.0',
          tires: 'Continental Grand Prix 700x25c',
        },
        components: {
          saddle: 'Scott Syncros Belcarra 2.0',
          seatpost: 'Scott Syncros Carbon',
          handlebar: 'Syncros Creston 2.0',
          stem: 'Syncros RR2.0',
          headset: 'Integrated',
          grips: 'Syncros Super Light',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 5,
      name: 'Merida',
      slug: 'merida',
      imageSrc: '/images/bike/merida.png',
      description: 'Tajwańskie rowery szosowe',
      details: {
        general: {
          brand: 'Merida',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.7 kg',
        },
        frame: {
          size: '52 cm',
          material: 'Carbon',
          fork: 'Merida Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano 105',
          frontDerailleur: 'Shimano 105',
          rearDerailleur: 'Shimano 105',
          cassette: 'Shimano 105 11-30T',
          chain: 'KMC X11',
        },
        brakes: {
          brakes: 'Shimano 105',
          brakeLevers: 'Shimano 105',
        },
        wheels: {
          size: '700c',
          hubs: 'Merida',
          rims: 'Merida Expert SL',
          spokes: 'Stainless Steel',
          tires: 'Maxxis Re-Fuse 700x28c',
        },
        components: {
          saddle: 'Merida Comp CC',
          seatpost: 'Merida Expert',
          handlebar: 'Merida Expert SL',
          stem: 'Merida Expert SL',
          headset: 'Merida M2331',
          grips: 'Merida Road Expert',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 6,
      name: 'Kross',
      slug: 'kross',
      imageSrc: '/images/bike/kross.png',
      description: 'Polskie rowery szosowe',
      details: {
        general: {
          brand: 'Kross',
          gender: 'Unisex',
          color: 'Various',
          weight: '10.5 kg',
        },
        frame: {
          size: '56 cm',
          material: 'Aluminum',
          fork: 'Kross Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Claris',
          frontDerailleur: 'Shimano Claris',
          rearDerailleur: 'Shimano Claris',
          cassette: 'Shimano Claris 11-32T',
          chain: 'KMC Z8',
        },
        brakes: {
          brakes: 'Tektro R315',
          brakeLevers: 'Shimano Claris',
        },
        wheels: {
          size: '700c',
          hubs: 'Formula',
          rims: 'Kross Rims',
          spokes: 'Stainless Steel',
          tires: 'Kenda K152 700x25c',
        },
        components: {
          saddle: 'Kross VL-1489',
          seatpost: 'Kross VL-1489',
          handlebar: 'Kross VL-1492',
          stem: 'Kross VL-1493',
          headset: 'Kross VL-1488',
          grips: 'Kross VL-1491',
          pedals: 'Wellgo LU-C25',
        },
      },
    },
    {
      id: 7,
      name: 'Cube',
      slug: 'cube',
      imageSrc: '/images/bike/cube.png',
      description: 'Niemieckie rowery szosowe',
      details: {
        general: {
          brand: 'Cube',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.4 kg',
        },
        frame: {
          size: '53 cm',
          material: 'Aluminum',
          fork: 'Cube CSL Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano 105',
          frontDerailleur: 'Shimano 105',
          rearDerailleur: 'Shimano 105',
          cassette: 'Shimano 105 11-32T',
          chain: 'Shimano CN-HG601',
        },
        brakes: {
          brakes: 'Shimano 105',
          brakeLevers: 'Shimano 105',
        },
        wheels: {
          size: '700c',
          hubs: 'Shimano WH-RS100',
          rims: 'Shimano WH-RS100',
          spokes: 'Shimano WH-RS100',
          tires: 'Schwalbe Lugano 700x25c',
        },
        components: {
          saddle: 'Cube Natural Fit Venec Lite',
          seatpost: 'Cube Performance Post',
          handlebar: 'Cube Compact Race Bar',
          stem: 'Cube Performance Stem Pro',
          headset: 'FSA No.10',
          grips: 'Cube Grip Control',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 8,
      name: 'Giant',
      slug: 'giant',
      imageSrc: '/images/bike/giant.png',
      description: 'Tajwańskie rowery szosowe',
      details: {
        general: {
          brand: 'Giant',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.6 kg',
        },
        frame: {
          size: '54 cm',
          material: 'Aluminum',
          fork: 'Giant Advanced Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Tiagra',
          frontDerailleur: 'Shimano Tiagra',
          rearDerailleur: 'Shimano Tiagra',
          cassette: 'Shimano Tiagra 11-32T',
          chain: 'KMC Z8.3',
        },
        brakes: {
          brakes: 'Tektro R315',
          brakeLevers: 'Shimano Tiagra',
        },
        wheels: {
          size: '700c',
          hubs: 'Giant SR2',
          rims: 'Giant SR2',
          spokes: 'Giant SR2',
          tires: 'Giant S-R3 AC 700x28c',
        },
        components: {
          saddle: 'Giant Contact Comfort',
          seatpost: 'Giant D-Fuse',
          handlebar: 'Giant Connect',
          stem: 'Giant Connect',
          headset: 'Giant Sella',
          grips: 'Giant Tactal',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 9,
      name: 'Cervelo',
      slug: 'cervelo',
      imageSrc: '/images/bike/cervelo.png',
      description: 'Kanadyjskie rowery szosowe',
      details: {
        general: {
          brand: 'Cervelo',
          gender: 'Unisex',
          color: 'Various',
          weight: '8.7 kg',
        },
        frame: {
          size: '54 cm',
          material: 'Carbon',
          fork: 'Cervelo All-Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Ultegra',
          frontDerailleur: 'Shimano Ultegra',
          rearDerailleur: 'Shimano Ultegra',
          cassette: 'Shimano Ultegra 11-30T',
          chain: 'Shimano CN-HG701',
        },
        brakes: {
          brakes: 'Shimano Ultegra',
          brakeLevers: 'Shimano Ultegra',
        },
        wheels: {
          size: '700c',
          hubs: 'DT Swiss P1800 Spline',
          rims: 'DT Swiss P1800 Spline',
          spokes: 'DT Swiss P1800 Spline',
          tires: 'Continental Grand Prix 5000 700x25c',
        },
        components: {
          saddle: 'Prologo Dimension NDR',
          seatpost: 'Cervelo SP18 Carbon',
          handlebar: 'Cervelo AB06 Carbon',
          stem: 'Cervelo ST29',
          headset: 'FSA IS2',
          grips: 'Prologo One Touch',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 10,
      name: 'Bianchi',
      slug: 'bianchi',
      imageSrc: '/images/bike/bianchi.png',
      description: 'Włoskie rowery szosowe',
      details: {
        general: {
          brand: 'Bianchi',
          gender: 'Unisex',
          color: 'Various',
          weight: '8.6 kg',
        },
        frame: {
          size: '53 cm',
          material: 'Carbon',
          fork: 'Bianchi Full Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano 105',
          frontDerailleur: 'Shimano 105',
          rearDerailleur: 'Shimano 105',
          cassette: 'Shimano 105 11-30T',
          chain: 'Shimano 105',
        },
        brakes: {
          brakes: 'Shimano 105',
          brakeLevers: 'Shimano 105',
        },
        wheels: {
          size: '700c',
          hubs: 'Shimano WH-RS171',
          rims: 'Shimano WH-RS171',
          spokes: 'Shimano WH-RS171',
          tires: 'Vittoria Zaffiro 700x28c',
        },
        components: {
          saddle: 'Selle Royal Seta S1',
          seatpost: 'Bianchi Reparto Corse',
          handlebar: 'Reparto Corse Compact',
          stem: 'Reparto Corse Alloy',
          headset: 'FSA NO.8B/ZS4D',
          grips: 'Bianchi Cork Tape',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 11,
      name: 'Pinarello',
      slug: 'pinarello',
      imageSrc: '/images/bike/pinarello.png',
      description: 'Włoskie rowery szosowe',
      details: {
        general: {
          brand: 'Pinarello',
          gender: 'Unisex',
          color: 'Various',
          weight: '8.5 kg',
        },
        frame: {
          size: '55 cm',
          material: 'Carbon',
          fork: 'Pinarello Carbon ONDA with ForkFlap™',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Ultegra',
          frontDerailleur: 'Shimano Ultegra',
          rearDerailleur: 'Shimano Ultegra',
          cassette: 'Shimano Ultegra 11-30T',
          chain: 'Shimano Ultegra',
        },
        brakes: {
          brakes: 'Shimano Ultegra',
          brakeLevers: 'Shimano Ultegra',
        },
        wheels: {
          size: '700c',
          hubs: 'Fulcrum Racing 4 C17',
          rims: 'Fulcrum Racing 4 C17',
          spokes: 'Fulcrum Racing 4 C17',
          tires: 'Vittoria Zaffiro Pro 700x25c',
        },
        components: {
          saddle: 'Most Panther',
          seatpost: 'Most Tiger Ultra Aero 3K',
          handlebar: 'Most Jaguar XFC Aero 1K',
          stem: 'Most Tiger Ultra Aero 1K',
          headset: 'Most Aero 1K',
          grips: 'Most Grifo',
          pedals: 'Not included',
        },
      },
    },
    {
      id: 12,
      name: 'Fuji',
      slug: 'fuji',
      imageSrc: '/images/bike/fuji.png',
      description: 'Japońskie rowery szosowe',
      details: {
        general: {
          brand: 'Fuji',
          gender: 'Unisex',
          color: 'Various',
          weight: '9.3 kg',
        },
        frame: {
          size: '56 cm',
          material: 'Aluminum',
          fork: 'FC-440 Carbon',
          rearShock: 'None',
        },
        drive: {
          shifters: 'Shimano Tiagra',
          frontDerailleur: 'Shimano Tiagra',
          rearDerailleur: 'Shimano Tiagra',
          cassette: 'Shimano Tiagra 11-34T',
          chain: 'KMC X9',
        },
        brakes: {
          brakes: 'Tektro R315',
          brakeLevers: 'Shimano Tiagra',
        },
        wheels: {
          size: '700c',
          hubs: 'Formula',
          rims: 'Vera Corsa DPM27',
          spokes: 'Stainless Steel',
          tires: 'Vittoria Zaffiro 700x28c',
        },
        components: {
          saddle: 'Oval Concepts 238',
          seatpost: 'Oval Concepts 300',
          handlebar: 'Oval Concepts 325',
          stem: 'Oval Concepts 313',
          headset: 'FSA 1 1/8" - 1 1/4"',
          grips: 'Oval Concepts 300',
          pedals: 'Not included',
        },
      },
    },
  ],
}

export default data
