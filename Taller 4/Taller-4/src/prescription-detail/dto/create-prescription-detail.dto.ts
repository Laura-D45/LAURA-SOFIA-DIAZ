import { IsInt, IsNotEmpty, IsString } from "class-validator";
/**
 * Objeto de transferencia de datos (DTO) para la creación de un detalle de prescripción.
 * Contiene la dosis, duración, instrucciones y las IDs de las entidades relacionadas.
 */

// Create Prescription Detail DTO
export class CreatePrescriptionDetailDto {

    /**
     * El ID de la prescription
     * Se genera auntomaticamente
     */

    @IsInt()
    @IsNotEmpty()
    prescriptionId: number;
    
    /**
     * El ID de la medicina.
     * Se revisa la tabla medicine para este atributo.
     */

    @IsInt()
    @IsNotEmpty()
    medicineId: number;

        /**
     * Dosis de la medicina, e.g., '500mg' o '1 pastilla'.
     */
    @IsString()
    @IsNotEmpty()
    dose: string;

    @IsInt()
    @IsNotEmpty()
    duration: number;

    @IsString()
    @IsNotEmpty()
    instrucitons: string;
    
}