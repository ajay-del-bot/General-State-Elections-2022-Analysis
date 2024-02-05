from flask import Flask, render_template,send_file
import csv
# import reader_csv
from datetime import datetime
import io
import base64
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import pickle 
# import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd 

fig,ax=plt.subplots(figsize=(6,5))
# ax=sns.set_style(style="darkgrid")

x=[i for i in range(100)]
y=[i for i in range(100)]
# app=Flask(__name__)


app=Flask(__name__)

data=[]
df = pd.read_csv('state.csv', header=0)
with open('state.csv','r') as csv_file:
    csv_reader=csv.reader(csv_file)
    for line in csv_reader:
    		data.append(line)
    

@app.route('/')
def indexPage():
	
    return render_template('tp.html',data=data)

@app.route('/states/<name>')

def display_state(name):

    return render_template('states.html',name=name)

@app.route('/visualize')
def visualize():
    sns.lineplot(x,y)
    canvas=FigureCanvas(fig)
    img=io.BytesIO()
    fig.savefig(img)
    img.seek(0)
    return send_file(img,mimetype='img/png')


if __name__=="__main__":
	app.run(debug=True,port=8000)
# fig,ax=plt.subplots(figsize=(10,20))