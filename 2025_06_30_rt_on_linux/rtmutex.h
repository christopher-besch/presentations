struct rt_mutex_base {
	raw_spinlock_t		wait_lock;
	struct rb_root_cached   waiters;
	struct task_struct	*owner;
};

// --snip--
struct rt_mutex {
	struct rt_mutex_base	rtmutex;
	// --snip--
};
