    

---
      
# 🚗 Vehicle Rental System (C++) 

A **C++ console-based Vehicle Rental System** project designed to demonstrate **Object-Oriented Programming (OOP)** concepts such as **classes, inheritance, polymorphism, and file handling**. This project allows users to manage a rental service with **Cars** and **Bikes**, track their availability, and rent them while persisting data between program runs.

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Class Structure & OOP Design](#class-structure--oop-design)
5. [Data Storage](#data-storage)
6. [File Structure](#file-structure)
7. [Sample Console Output](#sample-console-output)
8. [Diagrams](#diagrams)
9. [How to Run](#how-to-run)
10. [Future Improvements](#future-improvements)

---

## 📝 Project Overview

This project simulates a **vehicle rental service** in a console environment. It allows a rental manager to:

* Add new vehicles (Cars/Bikes)
* Display all available vehicles with details
* Rent vehicles to customers
* Track availability dynamically
* Save all vehicle data persistently in a file

It is a **hands-on demonstration of OOP** principles in C++, including:

* **Encapsulation**: Data members are private/protected; accessed via getters/setters
* **Inheritance**: `Car` and `Bike` inherit from `Vehicle`
* **Polymorphism**: Virtual functions allow dynamic behavior for different vehicle types
* **File Handling**: Persistent storage using `.txt` file

---

## ⚡ Features

| Feature            | Description                                           |
| ------------------ | ----------------------------------------------------- |
| Vehicle Management | Add Cars or Bikes with unique IDs                     |
| Rent / Return      | Update availability status automatically              |
| Data Persistence   | Vehicle info saved and loaded from `vehicles.txt`     |
| Bulk Loading       | Load multiple vehicles automatically for testing/demo |
| Unique IDs         | Each vehicle has a unique ID for tracking             |
| Console Interface  | Simple, menu-driven system for easy navigation        |

---

## 🔍 How It Works

### 1️⃣ Vehicle Classes

The system has **3 main classes**:

* **Vehicle (Base Class)**:

  ```cpp
  class Vehicle {
      int id;
      string brand;
      string model;
      float rentPerDay;
      bool isAvailable;
  };
  ```

  * **Purpose**: Stores common properties for all vehicles
  * **How it works**: Constructor initializes ID, brand, model, rent, and availability.
  * **Methods**:

    * `getId()`, `getBrand()`, `getModel()`, `getRentPerDay()`, `available()`

* **Car (Derived Class)**:

  ```cpp
  class Car : public Vehicle {
      int seats;
  };
  ```

  * Inherits from `Vehicle`
  * Adds `seats` property
  * Overrides virtual functions as needed

* **Bike (Derived Class)**:

  ```cpp
  class Bike : public Vehicle {
      int engineCC;
  };
  ```

  * Inherits from `Vehicle`
  * Adds `engineCC` property
  * Overrides virtual functions as needed

---

### 2️⃣ RentalSystem Class

This is the **main manager class**:

* Stores all vehicles in a `vector<Vehicle*> vehicles`
* Tracks `nextId` for automatic unique ID assignment
* Handles:

  * Adding vehicles (`addVehicle()`)
  * Displaying vehicles (`showVehicles()`)
  * Renting vehicles (`rentVehicle()`)
  * Loading/saving vehicles to a file (`loadFromFile()`, `saveToFile()`)

**Key principle**: All vehicle operations go through this class → central point of control.

---

### 3️⃣ File Handling

* File: `vehicles.txt`
* Each line format:

```
ID TYPE BRAND MODEL RENT AVAILABLE EXTRA
```

* Example:

```
1 CAR Toyota Fortuner 3000 1 7
2 BIKE Yamaha R15 800 1 155
```

* **How it works**:

  * On startup, file is read line by line
  * Each line is parsed and added to `vehicles` vector
  * `nextId` is updated to avoid ID conflicts
  * On adding/renting vehicles, file is overwritten with current data

---

### 4️⃣ Menu Flow (Console UI)

```
=========================
 VEHICLE RENTAL SYSTEM
=========================
1. Add Vehicle
2. Show Vehicles
3. Rent Vehicle
4. Exit
```

* **Add Vehicle**: User chooses Car/Bike → inputs brand, model, rent, extra info
* **Show Vehicles**: Prints table with all details (ID, Brand, Model, Rent, Type, Extra)
* **Rent Vehicle**: User enters ID → availability toggled → file updated
* **Exit**: Program ends

---

## 📊 Class Diagram (Textual)

```
          +------------------+
          |    Vehicle       |
          +------------------+
          | - id             |
          | - brand          |
          | - model          |
          | - rentPerDay     |
          | - isAvailable    |
          +------------------+
          | +getId()         |
          | +getBrand()      |
          | +getModel()      |
          | +getRentPerDay() |
          | +available()     |
          +------------------+
                  ^
                  |
        -------------------
        |                 |
   +---------+       +---------+
   |   Car   |       |  Bike   |
   +---------+       +---------+
   | - seats |       | - cc    |
   +---------+       +---------+
```

---

## 🖥️ Sample Output

```
ID   Brand       Model        Rent  Status     Type    Extra
---------------------------------------------------------------
1    Toyota      Fortuner     3000  Available  CAR     Seats: 7
2    Yamaha      R15          800   Available  BIKE    CC: 155
```

* Renting a vehicle updates `Status` → `Rented`
* File automatically updates for persistence

---

## ⚙️ How to Run

1. Clone the repo:

```bash
git clone <repo-url>
cd Vehical-Rental-System
```

2. Compile:

```bash
g++ -std=c++11 Vehical-rental-system.cpp -o rental.exe
```

3. Run:

```bash
.\rental.exe
```

4. Follow the menu instructions

---

## 💡 Future Improvements

* Customer class & booking history
* GUI interface using Qt/console graphics
* Search/filter vehicles by brand or type
* Multiple rental rates (hour/day/week)
* Support for CSV import/export

---

## 🔗 Summary

This project is a **complete demonstration of OOP in C++**, including:

* Inheritance & Polymorphism
* Encapsulation
* Dynamic memory management (`vector<Vehicle*>`)
* File persistence
* Menu-driven console interface

It is ideal as a **college-level project** to show **full OOP understanding and practical file-based persistence**.

---

---

# 🚀 CCA2: CI/CD Pipeline and Deployment

## 1. Project Overview

As part of CCA2, this project demonstrates a DevOps workflow using GitHub, Jenkins, Docker, Docker Hub, AWS EC2, Kubernetes, and Minikube.

The original Vehicle Rental System is a C++ console-based project. For this assignment, a frontend version is packaged into a Docker container using NGINX and deployed to a local Kubernetes cluster using Minikube.

## 2. Technologies Used

- **GitHub:** Stores the project source code and configuration files.
- **Jenkins:** Runs the configured CI/CD pipeline and verification stages.
- **AWS EC2:** Hosts the Jenkins server.
- **Docker:** Builds and runs the frontend container image.
- **Docker Hub:** Stores the Docker image.
- **Kubernetes:** Manages the containerized application.
- **Minikube:** Provides the local Kubernetes environment.
- **NGINX:** Serves the frontend files.

## 3. Repository Structure

The repository includes the following files:

```text
vehicle-rental-cca2/
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── Dockerfile
├── Jenkinsfile
└── README.md
```

Additional files from the original C++ project may also be present.

## 4. Dockerfile

The Dockerfile defines how the frontend container image is built.

```dockerfile
FROM nginx:alpine
COPY frontend/ /usr/share/nginx/html/
EXPOSE 80
```

**Explanation:**

1. `FROM nginx:alpine` selects the lightweight NGINX base image.
2. `COPY frontend/ /usr/share/nginx/html/` copies the frontend files into the web server directory.
3. `EXPOSE 80` documents the port used by NGINX inside the container.

The resulting image can be used to run the frontend in a Docker container.

## 5. Docker Hub Image

**Repository:** `jayjeet3005/vehicle_rental_system_cca2`

**Tag:** `1.0`

Docker was used to build the frontend image and push it to Docker Hub.

During the push operation, the message `Layer already exists` indicated that the corresponding layer was already present in the registry and did not need to be uploaded again.

Docker Hub provides a central location to store and retrieve the project image.

## 6. Jenkins Setup on AWS EC2

Jenkins was hosted on an AWS EC2 instance and configured to use the GitHub repository as its source.

The Jenkins job was configured as a Pipeline with the following settings:

- Repository URL: `https://github.com/jayjeetdeone-01/vehicle-rental-cca2`
- Branch: `main`
- Pipeline script path: `Jenkinsfile`

The Jenkins pipeline was executed, and its results were checked using the Jenkins build page and Console Output.

## 7. Jenkins Pipeline Stages

The Jenkinsfile contains the following stages:

| Stage | Purpose |
|---|---|
| Checkout | Represents the source-code checkout stage. |
| Build and Test | Checks that the required frontend HTML file exists. |
| Docker Check | Checks Docker availability and version. |
| Push Image | Informational placeholder; the Docker image push is performed separately. |
| Deploy to Minikube | Informational placeholder; deployment is performed separately on local Minikube. |
| Verify | Lists the frontend files and checks for the Kubernetes manifest files. |

The current Jenkins pipeline automates project verification. The Docker Hub push and Minikube deployment are not automatically executed by Jenkins in the current implementation.

## 8. Kubernetes Deployment

The `k8s/` directory contains two configuration files.

### Deployment Manifest

The `deployment.yaml` file specifies the container image and the desired application Pod configuration. Kubernetes uses the Deployment to create and maintain the application Pods.

### Service Manifest

The `service.yaml` file provides a stable network endpoint to access the application through the Kubernetes cluster.

Together, the Deployment and Service manifests define how the frontend runs and how it can be accessed within the Minikube environment.

## 9. Application Access and Verification

The Kubernetes manifests were applied to the local Minikube cluster.

The deployment status and Service URL were checked, and the frontend was opened in a web browser through the generated Minikube URL.

This verified that the frontend was accessible in the local Kubernetes environment.

**Implementation note:** The containerized version serves the frontend using NGINX. It does not currently run the original C++ console application or connect to its database.

## 10. Second Pipeline Run

For the subsequent Jenkins run, the Jenkinsfile was updated to use Linux-compatible shell commands because Jenkins was running on an AWS Linux server.

Windows-specific `bat` commands were replaced with `sh` commands.

The updated pipeline was executed again, and the build result and Console Output were checked. The successful result confirmed that the configured verification steps completed without a reported failure.

## 11. Screenshots and Evidence

The project demonstration includes screenshots of:

1. Docker images.
2. Docker push confirmation.
3. Kubernetes Deployment and Service manifests.
4. AWS EC2 instance.
5. Minikube Service URL.
6. Running frontend webpage.
7. Docker Hub repositories.
8. The project Docker Hub repository and image tag `1.0`.
9. GitHub repository and project files.
10. Jenkins pipeline.
11. Jenkins build process.
12. Jenkins Console Output and successful build result.

## 12. Conclusion

This assignment provided practical experience with Docker containerization, Docker Hub image management, GitHub source-code management, Jenkins pipeline verification, AWS EC2 infrastructure, and Kubernetes deployment using Minikube.

The project demonstrates how these tools contribute to a DevOps workflow while distinguishing between automated Jenkins verification and the separately performed image push and local Kubernetes deployment.
