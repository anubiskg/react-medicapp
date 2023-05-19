#include <stdio.h>
#include <stdlib.h>
#include "mpi.h"
#include <libgen.h>
#define MAXHILOS 8

void ceros(double theVec[], int theSize);

void muestre(double theVec[], int theSize);

 void ceros(double arr[], int tam) {
    for(short i=0; i<tam; i++)
    arr[i] = 0.0;
 }

 void muestre(double arr[], int tam) {
     for(short i=0; i<tam; i++) {
        if(i==0) printf( "\t");
        printf( " %+6.6f ", arr[i]);
        if(i==(tam-1))
        printf( "\n");
     }
 }

 int main(int argc, char* argv[]) {
    int num, total, long_nom, n, rc = 0;
    unsigned long iter = 900000000;
    double aleat;
    double arreglo[MAXHILOS];
    char nom[MPI_MAX_PROCESSOR_NAME];
    double PI = 3.1415926535897932384626;

    MPI_Init(&argc, &argv);
    MPI_Get_processor_name(nom, &long_nom);
    MPI_Comm_rank(MPI_COMM_WORLD, &num);
    MPI_Comm_size(MPI_COMM_WORLD, &total);

    printf("Iniciando proceso %d (%s)\n", num, nom);
    srand(num);
    aleat = (double) rand()/10000;
    printf( "Generado aleatorio %3.6f\n", aleat);
    if(num!=0) {
        MPI_Send(&aleat, 1, MPI_DOUBLE, 0, 0, MPI_COMM_WORLD);
        printf( "Enviado %+6.6f al master %d\n", aleat, 0);
    } else {
        printf( "Master (%d)\n");
        ceros(arreglo, total);
        muestre(arreglo, total);
        arreglo[num] = aleat;
        muestre(arreglo, total);
        for(n=0+1; n<total; n++) {
            printf( "Recibiendo de %d...\n", n);
            MPI_Recv(&aleat, 1, MPI_DOUBLE, n, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            printf( "Recibió %+6.6f de %d\n", aleat, n);
            arreglo[n] = aleat;
            muestre(arreglo, total);
        } // for(n...)
    } // if (num!=0) else ...

    MPI_Finalize();
    return rc;
 }