from manim import *

config.background_color = WHITE

def create_tree(labels, edges):
    vertices = range(len(labels))
    g = Graph(vertices, edges, layout="tree", labels=labels, root_vertex=0, layout_scale=3, vertex_type=Dot, vertex_config={
        "color": BLACK,
        "fill_opacity": 1,
        "fill_color": WHITE,
        "stroke_width": 1,
        "radius": 0.3,
    }, edge_config={
        "color": BLACK,
        "stroke_width": 0.7,
    })
    g.scale_to_fit_height(config.frame_height - 1)
    return g


class Tree1(Scene):
    def construct(self):
        labels = {
            0: "+",
            1: "\cdot",
            2: "+",
            3: "35",
            4: "15",
            5: "3",
            6: "\cdot",
            7: "4",
            8: "+",
            9: "31",
            10: "9",
        }
        edges = [
            (0, 6), (0, 1),
            (1, 5), (1, 2),
            (2, 4), (2, 3),
            (6, 8), (6, 7),
            (8, 10), (8, 9),
        ]
        self.add(create_tree(labels, edges))


class Tree2(Scene):
    def construct(self):
        labels = {
            0: "+",
            1: "+",
            2: "+",
            3: "65",
            4: "25",
            5: "\cdot",
            6: "22",
            7: "5",
            8: "\cdot",
            9: "2",
            10: "+",
            11: "11",
            12: "89",
        }
        edges = [
            (0, 8), (0, 1),
            (1, 5), (1, 2),
            (2, 4), (2, 3),
            (5, 7), (5, 6),
            (8, 10), (8, 9),
            (10, 12), (10, 11),
        ]
        self.add(create_tree(labels, edges))

class Tree3(Scene):
    def construct(self):
        labels = {
            0: "\cdot",
            1: "+",
            2: "25",
            3: "75",
            4: "+",
            5: "\cdot",
            6: "75",
            7: "4",
            8: "+",
            9: "28",
            10: "72",
        }
        edges = [
            (0, 4), (0, 1),
            (1, 3), (1, 2),
            (4, 8), (4, 5),
            (5, 7), (5, 6),
            (8, 10), (8, 9)
        ]
        self.add(create_tree(labels, edges))
