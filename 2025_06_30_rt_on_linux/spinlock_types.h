#ifndef CONFIG_PREEMPT_RT
// --snip--
typedef struct spinlock {
	union {
		struct raw_spinlock rlock;
        // --snip--
	};
} spinlock_t;

// --snip--
#else /* !CONFIG_PREEMPT_RT */
// --snip--
typedef struct spinlock {
	struct rt_mutex_base	lock;
    // --snip--
} spinlock_t;
