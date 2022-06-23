void ensure_frame_existence(uint32_t frame)
{
    MAKI_ASSERT_CTRL_THREAD();
    rec_lock lock {m_mutex};
    if(frame >= m_atom_diff_frames.size())
        m_atom_diff_frames.resize(frame + 1);
}
