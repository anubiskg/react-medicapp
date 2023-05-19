#include <stdio.h>
#include "mpi.h"

int main(int argc, char *argv[ ])
{
    int rank, size;

    //Inicializacion de la interfaz de paso de mensajes

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    print("Soy el core nro. %d de %d\n", rank, size);

    MPI_Finalize();

    return 0;

}