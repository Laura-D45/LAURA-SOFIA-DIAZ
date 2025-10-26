# 🏥 Hospital Management System – Backend (NestJS)

Sistema hospitalario desarrollado con **NestJS**, **TypeORM** y **PostgreSQL**, que permite la gestión integral de pacientes, médicos, citas, recetas, medicamentos, especialidades, facturas y autenticación.

---

## 📋 Descripción General

Este proyecto implementa un **API RESTful** para administrar los procesos más comunes dentro de un hospital, incluyendo:

- Registro y actualización de **personas**, **pacientes** y **médicos**.
- Asignación de **especialidades médicas**.
- Creación y seguimiento de **citas médicas (appointments)**.
- Generación de **recetas (prescriptions)** y **detalles de medicamentos**.
- Emisión de **facturas (invoices)**.
- Módulo de **autenticación y seguridad (Auth)**.

El sistema sigue las buenas prácticas de NestJS:
- Arquitectura modular y escalable.
- Implementación del **Repository Pattern** con TypeORM.
- Validación de datos con **class-validator**.
- Control de errores mediante **HttpException**.
- Integración con **PostgreSQL** mediante `TypeOrmModule`.

---

## 🧩 Entidades Principales

| Entidad | Descripción | Relaciones |
|----------|-------------|-------------|
| **Person** | Datos personales base. | 1–1 con `Doctor` o `Patient`. |
| **Doctor** | Representa a un médico. | N–1 con `Specialty`, 1–N con `Appointment`. |
| **Patient** | Representa a un paciente. | 1–N con `Appointment`, 1–N con `Invoice`. |
| **Specialty** | Área médica (Ej. Cardiología). | 1–N con `Doctor`. |
| **Appointment** | Citas médicas programadas. | N–1 con `Doctor`, N–1 con `Patient`, 1–1 con `Prescription`. |
| **Prescription** | Receta médica. | N–1 con `Appointment`, N–1 con `Medicine`, 1–N con `PrescriptionDetail`. |
| **PrescriptionDetail** | Detalle de cada medicamento recetado. | N–1 con `Prescription`, N–1 con `Medicine`. |
| **Medicine** | Catálogo de medicamentos. | 1–N con `PrescriptionDetail`. |
| **Invoice** | Factura generada tras una cita. | N–1 con `Appointment`, N–1 con `Patient`. |
| **Auth** | Módulo de autenticación. | Maneja inicio de sesión y seguridad. |

---

## 🗂️ Estructura del Proyecto
src/
│
├── auth/
├── person/
├── doctor/
├── patient/
├── specialty/
├── appointment/
├── medicine/
├── prescription/
├── prescription-detail/
├── invoice/
├── office/
│
└── main.ts

Cada módulo contiene:
- `entity.ts`: Definición de la entidad con TypeORM.
- `controller.ts`: Rutas HTTP (CRUD).
- `service.ts`: Lógica de negocio.
- `module.ts`: Configuración del módulo.

---

## 🧠 Arquitectura y Flujo de Trabajo

El proyecto sigue la arquitectura **modular de NestJS**.
Además, se utiliza **Git Flow** para la colaboración en equipo:

### 🌱 Ramas
| Rama | Propósito |
|-------|------------|
| `main` | Versión estable y desplegable del sistema. |
| `develop` | Rama base para integrar cambios en desarrollo. |
| `feature/<modulo>` | Implementaciones individuales de cada módulo (ej. `feature/patient`). |

### 1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/hospital-system.git
cd hospital-system

### 2️⃣ Instalar dependencias
npm install

### 3️⃣ Base de datos

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=hospital_system
PORT=3000
JWT_SECRET=supersecretkey

### 4️⃣ Ejecutar migraciones y sincronización
npm run start:dev

### 5️⃣ Acceder al servidor
http://localhost:3000/


