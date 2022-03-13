from manim import *

config.transparent = True


class Graphic(Scene):
    def construct(self):
        ax = Axes(
            x_range=[0, 10, 1],
            y_range=[0, 100, 10],
            x_length=5,
            x_axis_config={
                # "numbers_to_include": np.arange(0, 10 + 0.1, 5),
                "font_size": 24,
            },
        ).add_coordinates()
        labels = ax.get_axis_labels(
            Text(r"Winkel in °").scale(0.7),
            Text(r"Intensität in %").scale(0.7)
        )

        dot = Dot(ax.c2p(7, 20))

        self.add(ax, labels, dot)
        
