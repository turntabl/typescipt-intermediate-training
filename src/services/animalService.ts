interface Animal {
  name: string;
  latin_name: string;
  animal_type: string;
  active_time: string;
  length_min: string;
  length_max: string;
  weight_min: string;
  weight_max: string;
  lifespan: string;
  habitat: string;
  diet: string;
  geo_range: string;
  image_link: string;
  id: number;
}

interface AnimalShipment {
  animals: string[];
  totalParcels: number;
  estimatedWeight: number;
}
const animalService = {
  async loadAnimals() {
    try {
    } catch (error) {}
  },

  getListOfNames(animals: Animal[]): string[] {
    return [];
  },

  getAnimalsSmallerThan(animals: Animal[], size: number): Animal[] {
    return [];
  },

  generateAnimalShipment(animals: Animal[]): AnimalShipment {
    return {} as AnimalShipment;
  },

  async saveAnimalShipment() {
    try {
    } catch (error) {}
  },
};

export default animalService;
