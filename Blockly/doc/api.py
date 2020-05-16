import serial,time
from time import sleep
import sys


COM_PORT = 'COM4'  # PORT
BAUD_RATES = 9600
ser = serial.Serial(COM_PORT, BAUD_RATES)

class Minikame_API:   
    def Minikame_Move(self,FRH_Angle,FLH_Angle,BRH_Angle,BLH_Angle,FRL_Angle,FLL_Angle,BRL_Angle,BLL_Angle):
        result = 'Move,'+str(FRH_Angle)+','+str(FLH_Angle)+','+str(BRH_Angle)+','+str(BLH_Angle)+','+str(FRL_Angle)+','+str(FLL_Angle)+','+str(BRL_Angle)+','+str(BLL_Angle)+'\n'
        print(result)
        ser.write(bytes(result, encoding = "utf8")) 
    
    def Minikame_Distance(self):
        result = 'Distance\n'
        ser.write(bytes(result, encoding = "utf8"))
        mcu_feedback = ser.readline().decode() # Receive response message and decode   
        distance = float(mcu_feedback.replace("\r", "").replace("\n", "").split(",")[1])
        print(mcu_feedback)
        return distance

    def Minikame_Reset(self):
        result = 'Reset\n'
        ser.write(bytes(result, encoding = "utf8"))

    def getStatus(self):
        result = 'getStatus\n'
        ser.write(bytes(result, encoding = "utf8"))       
        mcu_feedback = ser.readline().decode() # Receive response message and decode
        result = mcu_feedback.replace("\r", "").replace("\n", "").split(",",8)
        print(mcu_feedback)
        FRH,FLH,BRH,BLH,FRL,FLL,BRL,BLL = [int(i) for i in result]
        return FRH,FLH,BRH,BLH,FRL,FLL,BRL,BLL

