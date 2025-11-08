import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './medicine.entity';
import { Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicineService {
    constructor(
        @InjectRepository(Medicine)
        private readonly medicineRepository: Repository<Medicine>,
    ) {}

    // Create a medicine with the correct relations
    create(medicineDto: CreateMedicineDto) {
        const medicine = this.medicineRepository.create(medicineDto);
        return this.medicineRepository.save(medicine);
    }

    // Find all medicines with relations prescription and details
    findAll() {
        return this.medicineRepository.find();
    }

    // Find one medicine with relations id
    // findOne(id: number) {
    //     return this.medicineRepository.findOne({where: {id}});
    // }

    async findOne(id: number) {
        const medicine = await this.medicineRepository.findOne({ where: { id } });
        if (!medicine) {
            throw new NotFoundException(`Medicine with ID ${id} not found`);
        }
        return medicine;
    }

    async update(id: number, medicineDto: UpdateMedicineDto) {
        const result = await this.medicineRepository.update(id, medicineDto);
        if (result.affected === 0) {
            throw new NotFoundException(`Medicine with ID ${id} not found`);
        }
        return this.findOne(id);
    }

    async remove(id: number) {
        const result = await this.medicineRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Medicine with ID ${id} not found`);
        }
        return { message: `Medicine with ID ${id} deleted successfully` };
    }

    // // Delete medicine by id
    // remove(id: number) {
    //     return this.medicineRepository.delete(id);
    // }
}

