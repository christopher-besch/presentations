#define _GNU_SOURCE
#include <printf.h>
#include <pthread.h>
#include <sched.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

pthread_mutex_t mutex;

void pin_to_cpu(int cpu)
{
    cpu_set_t cpuset;
    CPU_ZERO(&cpuset);
    CPU_SET(cpu, &cpuset);
    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);
}

void* low_prio_thread(void* arg)
{
    pin_to_cpu(0);
    printf("low_prio: started, trying to acq mutex\n");
    pthread_mutex_lock(&mutex);
    printf("low_prio: acquired mutex\n");

    // simulate long operation
    // both sleep and busy wait work, though differently
    // sleep(4);
    for(volatile long i = 0; i < 1e10; ++i)
        ;

    printf("low_prio: releasing mutex\n");
    pthread_mutex_unlock(&mutex);
    printf("low_prio: finished\n");
    return NULL;
}

void* medium_prio_thread(void* arg)
{
    pin_to_cpu(0);
    // ensure high prio thread waits for lock
    sleep(2);
    printf("med_prio: started\n");

    // simulate CPU-intensive task
    // don't sleep here because we want to block the CPU
    for(volatile long i = 0; i < 1e10; ++i)
        ;

    printf("med_prio: finished\n");
    return NULL;
}

void* high_prio_thread(void* arg)
{
    pin_to_cpu(0);
    // ensure low prio thread has lock
    sleep(1);
    printf("hig_prio: started, trying to acq mutex\n");
    pthread_mutex_lock(&mutex);
    printf("hig_prio: acquired mutex\n");

    printf("hig_prio: releasing mutex\n");
    pthread_mutex_unlock(&mutex);
    printf("hig_prio: finished\n");
    return NULL;
}

int main()
{
    // initialize mutex
    pthread_mutexattr_t mutex_attr;
    pthread_mutexattr_init(&mutex_attr);
    pthread_mutex_init(&mutex, &mutex_attr);

    // initialize threads
    pthread_t          low, medium, high;
    pthread_attr_t     attr;
    struct sched_param param;
    pthread_attr_init(&attr);
    pthread_attr_setschedpolicy(&attr, SCHED_FIFO);
    pthread_attr_setinheritsched(&attr, PTHREAD_EXPLICIT_SCHED);

    param.sched_priority = 10;
    pthread_attr_setschedparam(&attr, &param);
    pthread_create(&low, &attr, low_prio_thread, NULL);

    param.sched_priority = 30;
    pthread_attr_setschedparam(&attr, &param);
    pthread_create(&high, &attr, high_prio_thread, NULL);

    param.sched_priority = 20;
    pthread_attr_setschedparam(&attr, &param);
    pthread_create(&medium, &attr, medium_prio_thread, NULL);

    // cleanup
    pthread_join(low, NULL);
    pthread_join(medium, NULL);
    pthread_join(high, NULL);
    pthread_attr_destroy(&attr);
    pthread_mutex_destroy(&mutex);
    pthread_mutexattr_destroy(&mutex_attr);
    return 0;
}
