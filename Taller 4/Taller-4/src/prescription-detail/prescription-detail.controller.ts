/**
 * Controlador para la gestión de detalles de prescripción.
 * Expone los endpoints CRED para la manipulación de la relación entre 
 * Prescripciones y Medicinas.
 */
import { Body, Controller, Get, Inject, Patch, Post, Param, Delete } from '@nestjs/common';
import { CreatePrescriptionDetailDto } from './dto/create-prescription-detail.dto';
import { PrescriptionDetailService } from './prescription-detail.service';
import { UpdatePrescriptionDetailsDto } from './dto/update-prescription-details.dto';


@Controller('prescription-detail')
export class PrescriptionDetailController {
    constructor(private readonly detailRepository: PrescriptionDetailService){}

    /**
     * 
     * @param createPrescriptionDetailDto con la información del detalle.
     * @returns El PrescriptionDetail recién creado
     */

    // ─── POST ────────
    //Create a new prescription detail
    //http:localhost:3000/prescription-detail
    // table relation between prescription and medicine, parameters id of prescription and medicine
    @Post()
    create(@Body() createPrescriptionDetailDto: CreatePrescriptionDetailDto) {
        return this.detailRepository.create(createPrescriptionDetailDto);
    }

    /**
     * Obtiene una lista de todos los detalles de prescripción.
     * @returns  Un array de PrescriptionDetail con las relaciones cargadas.
     */

    // ─── GET ─────────
    //Get all prescription details
    //http:localhost:3000/prescription-detail
    @Get()
    findAll() {
        return this.detailRepository.findAll();
    }

    /**
     * Actualiza un detalle de prescription existente.
     * @param id El ID del detalle de prescripción.
     * @returns El PrescriptionDetail encontrado.
     */

    // ─── GET ─────
    //Get prescription detail by id
    //http:localhost:3000/prescription-detail/1
    //The param id is the id of the prescription detail, is required
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.detailRepository.findOne(id);
    }

    /**
     * Actualiza un detalle de prescription existente.
     * @param id El ID del detalle a actualizar.
     * @param updatePrescriptionDetailsDto DTO con los campos a modificar.
     * @returns El detalle de prescripción actualizado.
     */

    // ─── PATCH ──────
    // Update prescription detail by id
    // http:localhost:3000/prescription-detail/1
    // The param id is the id of the prescription detail, is required for update
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePrescriptionDetailsDto: UpdatePrescriptionDetailsDto) {
        return this.detailRepository.update(id, updatePrescriptionDetailsDto);
    }
    /**
     * Elimina un detalle de prescripción por su ID.
     * @param id El ID del detalle a eliminar.
     * @returns Resultado de la operacipon de eliminación.
     */

    // ─── DELETE ──────
    // Delete prescription detail by id
    // http:localhost:3000/prescription-detail/1
    // The param id is the id of the prescription detail, is required for delete
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.detailRepository.remove(id);
    }

}


