static __always_inline void spin_lock(spinlock_t *lock)
{
	rt_spin_lock(lock);
}
